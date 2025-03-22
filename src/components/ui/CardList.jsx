"use client"
import style from "./card.module.css"
import CardItem from "./CardItem"
import rutacards from "./CardData"


export default function CardList(){
    return (
        <div className={`${style.productGrid} flex flex-wrap justify-start gap-4`}>
            {rutacards.map((card, index)=>(
                (
                <CardItem key={index} image={card.image} name={card.name} tallas={card.tallas} price={card.price} />
                )

            ))

            }
        </div>
    )
}