import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../service/axios";
import { toast } from "react-toastify";

const Register = () => {
  const [data,setData] = useState({});
  const navigate = useNavigate()
  const handleChange = (e) =>{
    const {name , value} = e.target;
    setData({...data, [name] : value});
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/user/register",data);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center bg-lightGreen h-screen">
      <h1 className="text-3xl font-bold  text-teal mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col bg-white max-w-[300px] p-11 gap-5">
        <input
          required
          className="p-3 border-b-2 outline-none"
          type="text"
          placeholder="Username"
          name="userName"
          value={data["userName"] || ""}
          onChange={handleChange}
        />
        <input
          required
          className="p-3 border-b-2 outline-none "
          type="email"
          name="email"
          value={data["email"] || ""}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          required
          className="p-3 border-b-2 outline-none "
          type="password"
          name="password"
          value={data["password"] || ""}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit" className="border bg-teal p-[10px] text-white">Register</button>
        <p className="text-red text-center ">This is an error !</p>
        <span className="text-center">
          Do you have an account?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
