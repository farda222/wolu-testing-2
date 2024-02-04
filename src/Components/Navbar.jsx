// Navbar.js
import { useState, useEffect } from "react";
import Logo from "../assets/img/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarTransparent(scrollTop < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`font-custom transition-all duration-300 ease-in-out fixed w-full px-5 py-7 border-b-[0.5px] border-solid border-neutral-500 z-50 ${isNavbarTransparent ? "bg-transparent" : "bg-white"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleMobileMenu} className={`-ml-3 md:hidden text-black focus:outline-none ${isNavbarTransparent ? "text-black" : "text-gray-800"}`}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <a href="/" className={`ml-5 text-lg flex gap-3 font-semibold ${isNavbarTransparent ? "text-black" : "text-gray-800"}`}>
            <img src={Logo} />
            WOLU
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4 bg-white">
          <a href="/" className={`hover:text-gray-300 ${isNavbarTransparent ? "text-black" : "text-gray-800"}`}>
            Home
          </a>
          <a href="/about" className={`hover:text-gray-300 ${isNavbarTransparent ? "text-black" : "text-gray-800"}`}>
            About
          </a>
          <a href="/services" className={`hover:text-gray-300 ${isNavbarTransparent ? "text-black" : "text-gray-800"}`}>
            Services
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/signup" className={`hover:text-gray-300 ${isNavbarTransparent ? "text-black" : "text-gray-800"}`}>
            Sign Up
          </a>
          <a href="/login" className={`hover:text-gray-300 ${isNavbarTransparent ? "text-black" : "text-gray-800"}`}>
            Login
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 transition-all">
            <div className="flex justify-start p-6">
              <button onClick={toggleMobileMenu} className={`text-black focus:outline-none ${isNavbarTransparent ? "text-black" : "text-gray-800 float-start"}`}>
                <svg className="h-6 w-6 float-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center mt-10">
              <a
                href="/"
                className={`text-black flex text-lg hover:bg-blue-600 w-full hover:bg-opacity-10 hover:text-indigo-600 hover:font-medium hover:border-l-4 hover:border-solid hover:border-indigo-600 transition-all p-4 ${
                  isNavbarTransparent ? "text-black" : "text-gray-800"
                }`}>
                Home
              </a>
              <a
                href="/about"
                className={`text-black hover:bg-blue-600 w-full hover:bg-opacity-20 hover:text-indigo-600 hover:font-medium hover:border-l-4 hover:border-solid hover:border-indigo-600 transition-all p-4 ${
                  isNavbarTransparent ? "text-black" : "text-gray-800"
                }`}>
                About Us
              </a>
              <a
                href="/services"
                className={`text-black hover:bg-blue-600 w-full hover:bg-opacity-20 hover:text-indigo-600 hover:font-medium hover:border-l-4 hover:border-solid hover:border-indigo-600 transition-all p-4 ${
                  isNavbarTransparent ? "text-black" : "text-gray-800"
                }`}>
                Community
              </a>
              <a
                href="/services"
                className={`text-black hover:bg-blue-600 w-full hover:bg-opacity-20 hover:text-indigo-600 hover:font-medium hover:border-l-4 hover:border-solid hover:border-indigo-600 transition-all p-4 ${
                  isNavbarTransparent ? "text-black" : "text-gray-800"
                }`}>
                Contact
              </a>
              <a
                href="/signup"
                className={`text-black text-center bg-white border-2 border-solid border-indigo-500 w-[70%] rounded-full mt-5 hover:bg-indigo-500 hover:text-white transition-all p-4 ${
                  isNavbarTransparent ? "text-black" : "text-gray-800"
                }`}>
                Sign Up
              </a>
              <a
                href="/login"
                className={`text-black text-center bg-white border-2 border-solid border-indigo-500 w-[70%] rounded-full mt-5 hover:bg-indigo-500 hover:text-white transition-all p-4 ${
                  isNavbarTransparent ? "text-black" : "text-gray-800"
                }`}>
                Login
              </a>
            </div>
          </div>
        )}
        <button className={"bg-indigo-600 text-white px-6 py-3 font-medium"}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
