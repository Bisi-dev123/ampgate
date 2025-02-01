import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="p-3 rounded-2xl text-[#FFFFFF] text-center hidden md:block">
      <p className="bg-[#FFB100] rounded-t-2xl p-0.5 text-base font-light">
        Let Ampgate Limited power your success
      </p>
      <div className="flex items-center justify-between px-14 py-4 bg-[#FFFFFF] rounded-b-2xl ">
        <div
          onClick={() => navigate("/")}
          className="text-[#4A4A4A] text-2xl font-bold cursor-pointer"
        >
          <img
            src="/ampgate-yellow-color.png"
            alt="Company Brand Logo"
            className="w-[160px] h-[53px] object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center gap-6 text-[#4A4A4A] uppercase font-semibold">
          <Link to="/" className="hover:text-[#FFB100] active:underline">Home</Link>
          <Link to="/about-us" className="hover:text-[#FFB100] active:underline">About Us</Link>
          <Link to="/services" className="hover:text-[#FFB100] active:underline">Services</Link>
        </div>

        <button
          onClick={() => navigate("/contact-us")}
          className="p-3 rounded-2xl w-[130px] bg-[#FFB100] hover:bg-gradient-to-b hover:from-[#4a4a4a] hover:to-[#FFB100] transition-all duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
