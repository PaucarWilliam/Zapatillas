"use client"
import Image from "next/image"
import style from "./card.module.css"

export default function CardItem({image, name, tallas,descuento,price }){
    return(
        <div className={`${style.productcard} relative`}>

                {descuento && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                    -{descuento}%
                 </span>}
            <Image 
                className={`${style.productImage} object-cover`}
                width={350}
                height={350}
                layout="fixed"
                src={image}
                alt={name}
                priority
            />

            <h2 className={style.productcardh2}>Modelo: {name}</h2>
            <h2 className={style.productcardh2}>Tallas: {tallas}</h2>
            <h2 className={style.productcardh2}>Precio: {price}</h2>
        </div>
    )
}