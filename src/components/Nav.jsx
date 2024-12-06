import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import ToggleSwitch from "./ToggleSwitch";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".hamburger-icon")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute mt-5 z-10 w-full py-6 sm:px-12 px-8 [@media(max-width:640px)_or_(max-height:640px)]:mt-0">
      <nav className="relative flex items-center justify-between max-container">
        <p className="font-palanquin text-xl text-white font-semibold">
          INDOTRAVI
        </p>

        {/* Desktop nav links */}
        <ul className="absolute shadow-md left-1/2 transform -translate-x-1/2 flex items-center justify-center py-3 px-6 gap-16 max-lg:hidden backdrop-blur-md bg-white/30 rounded-full">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-base leading-normal font-normal text-white-400 hover:text-slate-300 transition duration-300 ease-in-out"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right-side elements */}
        <div className="flex flex-row-reverse gap-3 max-lg:hidden">
          <button className="px-6 py-2 bg-white text-black rounded-3xl hover:bg-slate-200 transition duration-300">
            Login
          </button>

          <div>
            <ToggleSwitch />
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="hidden max-lg:block hamburger-icon"
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="max-lg:block absolute top-10 left-0 right-0 bottom-0 flex justify-center items-center py-6 px-8 transition-all duration-500 ease-in-out"
        >
          <div className="flex flex-col items-center gap-6 bg-white/90 p-6 rounded-xl">
            <ul className="flex flex-col items-center w-full">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-base font-normal text-slate-700 hover:text-slate-400 transition duration-300 ease-in-out text-center w-full"
                    onClick={toggleMenu} 
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
