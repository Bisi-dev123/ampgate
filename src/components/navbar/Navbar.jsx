import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="p-3 rounded-2xl text-[#FFFFFF] text-center hidden md:block">
      <p className="bg-[#FFB100] rounded-t-2xl p-2 text-base">
        Let Ampgate Limited power your success
      </p>
      <div className="flex items-center justify-between px-14 py-4 bg-[#FFFFFF] rounded-b-2xl ">
        <div
          onClick={() => navigate("/")}
          className="text-[#4A4A4A] text-2xl font-bold cursor-pointer"
        >
          <img
            src="/ampgate-yellow-color.png"
            alt="Contact Us hero image"
            className="w-[160px] h-[53px] object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center gap-6 text-[#4A4A4A]">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
        </div>
        <button
          onClick={() => navigate("/contact-us")}
          className="bg-[#FFB100] p-2 rounded-2xl"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
