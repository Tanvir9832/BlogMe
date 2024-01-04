import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Write from "./pages/Write";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import axiosInstance from "./service/axios";
import { authorization } from "./utils/authorization";
import { UserContext } from "./context/authContext";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />
      },
    ],
  },
]);

function App() {
  const { setUser } = UserContext();
  const checkout =async()=>{
    try {
      const res = await axiosInstance.get("/api/user/checkOut",authorization);
      setUser(res?.data?.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
     if(localStorage.getItem("blogME")){
      console.log("first");
      checkout();
     }
  },[])
  return (
    <div className="flex justify-center">
      <div className="lg:w-[1524px] mx-8">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;


//lg:max-w-[1024px] mx-8 md:max-w-[800px] sm:max-w-[400px] max-w-[320px]