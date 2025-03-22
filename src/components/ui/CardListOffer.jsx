"use client"
import style from "./card.module.css"
import CardItem from "./CardItem"
import rutacardsoffer from "./CardDataOffer"


export default function CardListOffer(){
    return (
        <div className={`${style.productGrid} flex flex-wrap justify-start gap-4`}>
            {rutacardsoffer.map((card, index)=>(
                (
                <CardItem key={index} image={card.image} name={card.name} tallas={card.tallas} price={card.price} descuento={card.descuento}/>
                )

            ))

            }
        </div>
    )
}