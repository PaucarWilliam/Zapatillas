import Image from "next/image"
import style from "./card.module.css"

const rutacards = [
    { image: "/images/cards/Superstar.webp", name: "Puma 35-42"},
    { image: "/images/cards/Superstar.webp", name: "Botin Retro 35-42"},
    { image: "/images/cards/NEGROYBLANCO.webp", name: "Botin Retro 35-42"},
    { image: "/images/cards/NeoAdidas.jpg", name: "Botin Retro 35-42"},
    { image: "/images/cards/pUMA.jpg", name: "Botin Retro 35-42"},
    { image: "/images/cards/Superstar.webp", name: "Botin Retro 35-42"},
];

export default function Card(){
    return(
        
       <div className={style.productGrid}>
           
            {rutacards.map((card, index) => (
                <div key={index} className={style.productcard}>
                    <Image
                        className={style.productImage} 
                        width={350} 
                        height={350}    
                        layout="fixed"
                        src={card.image} 
                        alt={card.name} 
                        priority={true}
                    />
                    <h2 className={style.productcardh2}>{card.name}</h2>
                </div>
            ))}
        </div>
       
    );
}
