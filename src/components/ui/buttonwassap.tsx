import Link from "next/link";
import style from "./card.module.css"
import { FaWhatsapp } from "react-icons/fa";
export default function Button(){
    const numero = "51922949073";
    const defaultmensaje= "¡Hola! Estoy interesado en comprar sus productos. ¿Podría darme más detalles?";
    const href1= `https://wa.me/${numero}?text=${encodeURIComponent(defaultmensaje)}`
    return(
        <Link
        href= {href1}
        target= "_blank"
        className= {style.whatsapp}>
        <FaWhatsapp/>
        </Link>
    )
}