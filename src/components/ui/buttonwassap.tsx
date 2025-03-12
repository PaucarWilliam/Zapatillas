import Link from "next/link";
import style from "./card.module.css"
import { FaWhatsapp } from "react-icons/fa";
export default function button(){

    return(
        <Link
        href="https://wa.me/5211234567890?text=¡Hola!%20Quiero%20más%20información"
        target= "_blank"
        className= {style.whatsapp}>
        <FaWhatsapp/>
        </Link>
    )
}