import logo from "../assets/logo.png";
import { FaPenFancy } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lightGreen flex justify-between items-center p-5 mt-24 mb-1">
          <img className="h-[50px]" src={logo} alt="loading" />
          <div className="flex items-center gap-2"> <span>Talk in Blog</span>  <FaPenFancy className="text-red" /> </div>
    </footer>
  )
}

export default Footer