import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axiosInstance from "../service/axios";
import { toast } from "react-toastify";

const Login = () => {
  const [data,setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) =>{
    const {name , value} = e.target;
    setData({...data, [name] : value});
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/user/login",data);
      localStorage.setItem("blogME",res.data.token);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center bg-lightGreen h-screen">
        <h1 className="text-3xl font-bold  text-teal mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col bg-white max-w-[300px] p-11 gap-5">
            <input required className="p-3 border-b-2 outline-none " type="email" name="email" value={data["email"] || ""} onChange={handleChange} placeholder="Email" />
            <input required className="p-3 border-b-2 outline-none " type="password" name="password" value={data["password"] || ""} onChange={handleChange} placeholder="Password" />
            <button type="submit" className="border bg-teal p-[10px] text-white">Login</button>
            <p className="text-red text-center ">This is an error !</p>
            <span className="text-center">Do not you have an account? <Link className="underline" to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login

//gap-5