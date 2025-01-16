import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../navbar/Navbar";

export default function Hero() {
  return (
    <>
      <div className="bg-[#F8F7F3]">
        {/* ======HERO SECTION====== */}
        <section className="">
          <div className="relative rounded-xl">
            <img
              src="/landing-hero-image.png"
              // src="https://s3-alpha-sig.figma.com/img/db69/8331/a3708d409fb2b997cf7fb652ce1fee14?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-5waJIupLTazAW2dCr60p5SD9djQYMsZHmiO5Fy90I9zjGCj~npLKmWL5cwzAYnAO~qshSsBR9PjjpHdWLqpGFgegqmR9EcPnWL875ccnUKX9L8O3jiE~EpXCEaCDcT~cgugi0Zk9LwVTU6GNALL3fBjifH9v-~xpL7H-tsUeioS4LMBYE64VTp~Bh6xxhh~xrRcoDMo35et7JzUNT13MHkFxaetOw-SY7VeVnw7OLuGq9MKVLM~yuZHKXasvyLPkSepsxXd7IVPnC1AnHehHinlPTzyg5tphm~7~CAu0d-drZJVKnNpdCZRBe1riCs4sZALoiBeHsKGiJk~wQqLw__"
              alt="Contact Us hero image"
              className="h-[650px] xl:h-[800px] w-full object-cover"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-between  md:px-8 lg:px-24 pb-24 absolute inset-0 bg-black bg-opacity-60">
              <div>
                <Navbar />
              </div>
              <div className="text-center text-[#FFFFFF]">
                <p className="text-base p-3 md:text-xl font-semibold mt-10 capitalize">
                  Welcome to ampgate limited
                </p>
                <p className="font-bold text-3xl md:text-5xl lg:text-7xl">
                  Your Premier Partner for Power Solutions
                </p>
                <p className="text-base p-3 md:text-base mt-3">
                  Industry-leading experts in energy and power solutions
                  tailored for your needs
                </p>
                <button className="bg-[#FFB100] p-3 rounded-2xl mt-6 w-[130px]">
                  Learn More
                </button>
              </div>

              <div className="flex justify-between px-4">
                <div className="md:flex items-center gap-4 w-fit text-white">
                  <p className="flex items-center gap-3">
                    <MdLocalPhone size={24} />
                    <span className="text-sm md:text-base">
                      +234 806 064 8425, <br className="md:hidden" /> +1 (973)
                      303-0214
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <CiMail size={24} className="text-white" color="#ffffff" />
                    <span className="uppercase text-sm md:text-base">
                      Get a quote
                    </span>
                  </p>
                </div>
                <div className="bg-[#ffffff] p-2  px-6 h-fit flex justify-center items-center gap-2 rounded-3xl">
                  <div className="bg-[#019734] p-2 rounded-full flex items-center w-8 h-8">
                    <FaWhatsapp color="#FFFFFF" size={24} className="" />
                  </div>
                  Say Hi
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======RATING SECTION====== */}
        <section className="relative bottom-24 w-fit px-6 mx-auto pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {/* ====trusted expertise====== */}
          <div className="text-[#464646] bg-[#FFFFFF] max-w-[400px] text-center p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#FFB100]">15+</h3>
            <p className="font-medium text-xl my-4">
              Years of trusted expertise
            </p>
            <p className="text-lg leading-8 font-extralight">
              With over fifteen years of expertise, we deliver innovative and
              reliable energy solutions tailored to your needs
            </p>
          </div>

          {/* ====Successful Projects ====== */}
          <div className="text-[#464646] bg-[#FFFFFF] max-w-[400px] text-center p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#FFB100]">2k</h3>
            <p className="font-medium text-xl my-4">Successful Projects</p>
            <p className="text-lg leading-8 font-extralight">
              With a proven record of excellence, our portfolio highlights
              diverse projects executed to perfection
            </p>
          </div>

          {/* ====Rated by Satisfied Clients ====== */}
          <div className="text-[#464646] bg-[#FFFFFF] max-w-[400px] text-center p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#FFB100]">4.9/5</h3>
            <p className="font-medium text-xl my-4">
              Rated by Satisfied Clients
            </p>
            <p className="text-lg leading-8 font-extralight">
              Our near-perfect rating reflects our dedication to exceptional
              service and customer satisfaction
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
