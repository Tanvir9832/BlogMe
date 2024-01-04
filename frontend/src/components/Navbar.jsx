import {RiMenu4Line} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import { UserContext } from "../context/authContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user } = UserContext();
  const navigate = useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem("blogME");
    toast.success("logout");
    navigate("/login");
  }
  return (
      <div className="flex justify-between items-center lg:-mr-60">
          <Link to="/">
            <img className="w-48 cursor-pointer mt-1 py-2" src={logo} alt="Loading" />
          </Link>
          <div className="md:flex hidden  items-center text-base font-300 gap-[10px]">
            <Link to="/art" >PROGRAMMING</Link>
            <Link to="/science"> SCIENCE</Link>
            <Link to="/technology">TECHNOLOGY</Link>
            <span className="font-500 text-lg">{user?.userName}</span>
            {
              user.email ? (<span className="cursor-pointer" onClick={handleLogOut}>LogOut</span>) : 
              (<span className="cursor-pointer" onClick={()=>navigate("/login")}>Log in</span>)
            }
            <Link className="" to="/write">
            <span className="bg-lightGreen w-[50px] h-[50px]  text-center flex justify-center cursor-pointer items-center  rounded-full hover:border-2 hover:border-lightGreen hover:bg-white">
              <span>Write</span>
            </span>
            </Link>
            
          </div>
          <div>
              <RiMenu4Line className="md:hidden" />
          </div>
      </div>
  )
}

export default Navbar