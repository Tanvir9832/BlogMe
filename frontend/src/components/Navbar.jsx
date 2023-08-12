import {RiMenu4Line} from "react-icons/ri";
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
      <div className="flex justify-between items-center lg:-mr-60">
          <Link to="/">
            <img className="w-48 cursor-pointer mt-1 py-2" src={logo} alt="Loading" />
          </Link>
          <div className="md:flex hidden  items-center text-base font-300 gap-[10px]">
            <Link to="/art" >ART</Link>
            <Link to="/science"> SCIENCE</Link>
            <Link to="/technology">TECHNOLOGY</Link>
            <Link to="/cinema">CINEMA</Link>
            <Link to="/design">DESIGN</Link>
            <Link to="/food">FOOD</Link>
            <span className="font-500 text-lg">TANVIR</span>
            <span>LogOut</span>
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