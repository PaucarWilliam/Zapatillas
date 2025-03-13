import Header from "@/components/layout/header"
import Card from "@/components/ui/ProductCard"
import Image from "next/image"
import Wassap from "@/components/ui/buttonwassap"

import "./globals.css"; 
import Script from "next/script";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Script rel="stylesheet"
        src='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        strategy='beforeInteractive'/>
    <header>
      <Header />
      
    </header>
    <main>
        <div className="hero">
            <img
                src="/images/fondos/Foto7.webp"
                alt="Mary Jhey"
                className="heroimg"
              />
            <a className="herotext">
                <h1 className="herotexth1">Mary Jhey</h1>
                <h3 className="herotexth3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod omnis pariatur tempore.</h3>
            </a>              
        </div>  

    </main>

    <section>
        <h1 className="titleproduct" >Productos</h1>
      <Card />
    </section>

    <Wassap />
    
    <footer>
      <Footer/>
    </footer>
  </div>
  );
}
