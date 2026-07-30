import { useState } from "react";

import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";

/**
 * Add this to your index.html <head> (or import in your global CSS)
 * so the serif logotype renders correctly:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/aboutus" },
  { label: "Contact us", href: "/contactus" },
  { label: "Reviews", href: "/reviews" },
  {label:"Admin" ,href:"/admin"}
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const jwttoken=Cookies.get("jwttoken");
  const navigate=useNavigate();

  const callfinalfunction=()=>{
    console.log("Function Called");
    if(jwttoken!=undefined){
      Cookies.remove("jwttoken");
      navigate("/")
    }else{
      navigate("/login");

    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0F2A22]/95 backdrop-blur-sm border-b border-[#D4AF7A]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1784878155/hotel-removebg-preview_pcerl8.png"
            alt="HotelZone logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-['Cormorant_Garamond',serif] text-2xl tracking-wide text-[#F3EFE6]">
            Hotel<span className="text-[#D4AF7A]">Zone</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex flex-row items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium tracking-wide text-[#F3EFE6]/80 hover:text-[#F3EFE6] transition-colors"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF7A] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login button */}
        <div className="hidden md:block">
          <button onClick={callfinalfunction} className="border border-[#D4AF7A] text-[#D4AF7A] text-sm font-semibold tracking-wide px-6 py-2.5 rounded-sm transition-colors duration-200 hover:bg-[#D4AF7A] hover:text-[#0F2A22]">
            {jwttoken ? "Logout" : "Login"}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-px w-6 bg-[#F3EFE6] transition-transform duration-200 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-[#F3EFE6] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-[#F3EFE6] transition-transform duration-200 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#D4AF7A]/20 bg-[#0F2A22] px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-base text-[#F3EFE6]/85 hover:text-[#D4AF7A] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="mt-6 w-full border border-[#D4AF7A] text-[#D4AF7A] text-sm font-semibold tracking-wide px-6 py-2.5 rounded-sm transition-colors duration-200 hover:bg-[#D4AF7A] hover:text-[#0F2A22]">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
