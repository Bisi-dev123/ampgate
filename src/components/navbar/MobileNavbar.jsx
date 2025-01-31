import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-gray-300 md:hidden">
      <Link to="/">
        <img
          src="/ampgate-yellow-color.png"
          alt="Ampgate brand logo"
          width={100}
          height={100}
        />
      </Link>

      {/* ====Hamburger===== */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 bg-[#FFB100] p-2 rounded-lg text-white"
      >
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* ====Menu list==== */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 z-1000 w-full h-screen bg-[#FFFFFF] text-[#161616] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-xl">
          <Link to="/">Home</Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="/about-us">About</Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="/services">Services</Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
