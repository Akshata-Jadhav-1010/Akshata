import { Link } from "react-router-dom"
import { navLinks } from "../../data"

import { FaUserLarge } from "react-icons/fa6";
import Icon from "./Icon";
const Navbar = () => {

    return (
        <nav className="w-full  h-[4rem] flex items-center justify-around px-2 py-1 lg:justify-around  ">
            <h2 className="font-bold text-2xl ">BlogGram </h2>
            <ul className=" hidden lg:flex gap-9 font-medium">
                {
                    navLinks.map(({ path, text }) => (<li key={path}> <Link to={path}> {text} </Link>   </li>))
                }

            </ul>
            <div className="flex gap-9 ">
                
                <Icon icon={<FaUserLarge/>} color={"text-slate-50"} bgColor={"bg-indigo-600"} />
            </div>
        </nav>
    )
}

export default Navbar