import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGreen h-screen">
        <h1 className="text-3xl font-bold  text-teal mb-6">Login</h1>
        <form className="flex flex-col bg-white max-w-[300px] p-11 gap-5">
            <input required className="p-3 border-b-2 outline-none " type="email" name="email" placeholder="Email" />
            <input required className="p-3 border-b-2 outline-none " type="password" name="password" placeholder="Password" />
            <button className="border bg-teal p-[10px] text-white">Login</button>
            <p className="text-red text-center ">This is an error !</p>
            <span className="text-center">Do not you have an account? <Link className="underline" to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login

//gap-5