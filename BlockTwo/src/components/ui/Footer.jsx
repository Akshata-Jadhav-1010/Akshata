import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import FooterBtn from "./FooterBtn";
import Icon from "./Icon";
const Footer = () => {
    return (
        <div className="w-full flex items-center justify-between flex-col gap-5 px-2 py-2 border-2">
            <h3 className="text-2xl font-bold "> BlogGram</h3>
            <p className="text-slate-400 w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore non sequi debitis soluta nulla minima? Dolore disi!</p>
            <div className="flex flex-wrap gap-7 items-center justify-center  m-5 ">


                <Icon icon={<FaFacebookF />} color={"text-slate-50"} bgColor={"bg-indigo-700"} />
                <Icon icon={<FaXTwitter />} color={"text-slate-50"} bgColor={"bg-indigo-700"} />
                <Icon icon={<AiFillInstagram />} color={"text-slate-50"} bgColor={"bg-indigo-700"} />
                <Icon icon={<FaLinkedin />} color={"text-slate-50"} bgColor={"bg-indigo-700"} />
                <Icon icon={<IoLogoWhatsapp />} color={"text-slate-50"} bgColor={"bg-indigo-700"} />
            </div>
            <div className=" flex items-center justify-center flex-wrap gap-3">
                <FooterBtn text={"Home"} />
                <FooterBtn text={"Contact"} />
                <FooterBtn text={"Blog"} />

            </div>

        </div>
    )
}

export default Footer