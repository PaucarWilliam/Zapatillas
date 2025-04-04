
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import CardListOffer from "@/components/ui/CardListOffer";
import Wassap from "@/components/ui/buttonwassap"
export default function Oferta(){
    return (
        <div className="flex flex-col min-h-screen" >
    
        <header>
            <Header/>
        </header>
       
        <main className="flex-grow">
            <section>
                <h2 className="text-3xl md:text-2xl sm:text-2xl font-bold text-white bg-gradient-to-r from-red-500 to-orange-400 px-4 py-2 rounded-lg shadow-lg uppercase tracking-[0.2em] sm:tracking-normal text-center mt-10 mb-10">
                ¡Grandes Ofertas Hoy!
                </h2>
                <CardListOffer />
            </section>

        </main>
        <Wassap />
        <footer>
             <Footer/>
        </footer>
       </div>
    )
}