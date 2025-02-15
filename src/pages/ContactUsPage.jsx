import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/navbar/Navbar";
import Footer from "/src/components/footer/Footer";
import MobileNavbar from "/src/components/navbar/MobileNavbar";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  return (
    <>
      {/* ======HERO SECTION====== */}
      <section className="">
        <div className="relative rounded-xl">
          <img
            src="/contact-us-hero-image.jpeg"
            alt="Contact Us hero pix"
            className="h-[550px] xl:h-[600px] w-full object-cover"
            width={100}
            height={100}
          />
          <div className="flex flex-col justify-between  md:px-8 lg:px-24 pb-10 absolute inset-0 bg-black bg-opacity-60">
            <div>
              <Navbar />
              <MobileNavbar />
            </div>
            <div className="text-center text-[#FFFFFF]">
              <p className="font-bold text-3xl md:text-5xl lg:text-7xl">
                Contact Us
              </p>
              <p className="text-base p-3 md:text-base">
                Reach out to us and we&apos;ll get back to you as soon as
                possible
              </p>
            </div>

            <div className="flex justify-between px-4">
              <div className="md:flex items-center gap-4 w-fit text-white">
                <p className="flex items-center gap-3">
                  <MdLocalPhone size={24} />
                  <span className="text-sm md:text-base">
                    +234 806 064 8425, <br className="md:hidden" />
                    +1 (973) 303-0214
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <CiMail size={24} className="text-white" color="#ffffff" />
                  <span className="uppercase text-sm md:text-base">
                    Get a quote
                  </span>
                </p>
              </div>
              <a
                  href="https://api.whatsapp.com/send/?phone=2348060648425&text=Hello+there!+I'd+like+to+know+more+about+your+product+and+services.&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <div className="bg-[#ffffff] p-2  px-6 h-fit flex justify-center items-center gap-2 rounded-3xl font-normal fixed bottom-10 right-10 z-[999] animate-bounce">
                    <div className="bg-[#019734] p-2 rounded-full flex items-center w-8 h-8">
                      <FaWhatsapp color="#FFFFFF" size={24} className="" />
                    </div>
                    Say Hi
                  </div>
                </a>
            </div>
          </div>
        </div>
      </section>
      {/* ======FORM AND GET IN TOUCH SECTION====== */}
      <section className="bg-[#161616] py-14">
        <div className="text-[#ffffff] p-6  md:flex md:flex-row-reverse md:gap-6 max-w-7xl mx-auto">
          {/* ===Get in touch & Form ===== */}
          <div className="w-full">
            <p className="uppercase">Get in touch</p>
            <p className="text-3xl font-bold mb-10 mt-4">
              Get in touch with us
            </p>
            <form action="https://getform.io/f/bllylqlb" method="POST">
              <div className="grid gap-10">
                {/* ===FullName Input ===== */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="fullName">Your Name </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    placeholder="Enter full name"
                    className="p-3 bg-transparent border-[0.5px] border-[#ffffff] rounded-md focus:outline-none w-full"
                  />
                </div>
                {/* ===Subject Input ===== */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Enter subject"
                    className="p-3 bg-transparent border-[0.5px] border-[#ffffff] rounded-md focus:outline-none w-full"
                  />
                </div>
                {/* ===Message Input ===== */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    className="p-3 focus:outline-none bg-transparent border-[0.5px] border-[#ffffff] rounded-md w-full"
                    placeholder="Add description"
                    name="message"
                    required
                    rows={4}
                    cols={20}
                  />
                </div>
                {/* ===Submit Button ===== */}
                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    className=" bg-[#ffb100] rounded-md w-fit px-6 py-1"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* =====Our Company ==== */}
          <div className="grid grid-cols-1 gap-6  text-sm w-full h-fit mt-14 md:mt-0">
            <div className="grid grid-cols-1 gap-4">
              <h4 className="uppercase text-lg">Our Company</h4>
              <img
                src="/ampgate-logo.png"
                alt="ampgate logo"
                className="w-[203.91px] h-[60.53px]"
              />
              <p>Let Ampgate Limited power your success</p>
            </div>
            <p>
              4, Alhaji Akanbi Oreniwon <br />
              Street. Lagos, Nigeria
            </p>
            <p>+234 806 064 8425</p>
            <Link to="mailto:sales@ampgatenigeria.com" className="lg:hover:font-semibold text-[#FFB100]">sales@ampgatenigeria.com</Link>
            <p>AMGATE LLC 6289 VALLEY VIEW DRIVE, Fishers, IN, 46038, USA</p>
            <p>+1 (973) 303-0214</p>
            <Link to="mailto:ampgatellc.com" className="lg:hover:font-semibold text-[#FFB100]">ampgatellc.com</Link>
          </div>
        </div>
      </section>

      {/* ======MAP SECTION====== */}
      <section>
        <div className="sm:w-full lg:w-full border-[1.3px] border-blue-300">
          <iframe
            style={{
              width: "100%",
              height: "609px",
              margin: "0",
              padding: "0",
            }}
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4,%20Alhaji%20Akanbi%20Oreniwon%20Street.%20Lagos,%20Nigeria+(Ampgate)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </section>
      {/* ======FOOTER SECTION====== */}
      <Footer />
    </>
  );
}
