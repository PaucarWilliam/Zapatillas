import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#1E3A8A] py-6 px-4">
            <div className="mx-auto w-full max-w-screen-xl flex flex-col items-center">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Redes Sociales</h1>
                <div className="flex flex-row items-center gap-6">
                    <a href="#" className="flex items-center gap-2 text-gray-500 text-gray-900 text-white">
                        <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10" />
                        <span className="text-gray-100 text-white text-sm sm:text-base">Facebook</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-500 text-gray-900 text-white">
                        <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10" />
                        <span className="text-gray-100 text-white text-sm sm:text-base">Instagram</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
  