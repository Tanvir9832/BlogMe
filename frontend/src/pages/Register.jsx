import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-lightGreen h-screen">
      <h1 className="text-3xl font-bold  text-teal mb-6">Register</h1>
      <form className="flex flex-col bg-white max-w-[300px] p-11 gap-5">
        <input
          required
          className="p-3 border-b-2 outline-none"
          type="text"
          placeholder="Username"
          name="name"
        />
        <input
          required
          className="p-3 border-b-2 outline-none "
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          required
          className="p-3 border-b-2 outline-none "
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="border bg-teal p-[10px] text-white">Register</button>
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
