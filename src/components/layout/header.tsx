"use client"
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className=" border-gray-200 px-4 lg:px-6 py-4 bg-[#1E3A8A]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
              width={50}
              height={50}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none text-gray-400 hover:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:space-x-8 w-full lg:w-auto mt-4 lg:mt-0`}
            id="mobile-menu"
          >
            <ul className="flex flex-col lg:flex-row text-[1.3rem] font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-200 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-100 text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-200 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-100 text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Conócenos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-200 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-100 text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Ofertas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
