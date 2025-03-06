import { Check } from "lucide-react";
import Navbar from "/src/components/navbar/Navbar";
import Footer from "/src/components/footer/Footer";
import MobileNavbar from "/src/components/navbar/MobileNavbar";
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <div className="bg-[#F8F7F3]">
        {/* ======HERO SECTION====== */}
        <section className="bg-[#FED24C]">
          <div className="flex flex-col justify-between max-w-6xl mx-auto pb-20 ">
            <div>
              <Navbar />
              <MobileNavbar />
            </div>
            <div className="text-center max-w-5xl mx-auto mt-32 md:mt-14 px-4">
              <p className="font-bold text-3xl md:text-7xl">
                Tailored Energy Solutions to Drive Your Success
              </p>
              <p className="text-base p-3 md:text-base mt-3">
                At AMP Gate Nigeria, we offer a comprehensive range of energy
                services designed to meet your unique needs
              </p>
            </div>

            <div className="flex items-baseline justify-between gap-10 mt-10 px-4">
              <div className="space-y-6">
                <img
                  src="/crane.jpeg"
                  alt="services hero image"
                  className="rounded-full h-[60px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] object-cover lg:ml-10 xl:ml-20"
                  width={100}
                  height={100}
                />

                <img
                  src="/three-phase-transformer.png"
                  alt="services hero image"
                  className="rounded-full h-[60px] md:h-[100px] md:w-[100px] lg:h-[180px] lg:w-[180px] object-cover"
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <img
                  src="/cat-generator.jpeg"
                  // src="/services-hero-image-one.jpeg"
                  alt="about-us hero image"
                  className="rounded-3xl md:rounded-full h-[100px] w-[260px] md:h-[240px] md:w-[550px] object-cover"
                  width={100}
                  height={100}
                />
              </div>

              <div className="space-y-6">
                <img
                  src="/diesel-generator-set.jpg"
                  alt="services hero image"
                  className="rounded-full h-[60px] w-[60px] md:h-[100px] md:w-[100px] lg:h-[180px] lg:w-[180px] object-cover lg:mr-10 xl:mr-20"
                  width={100}
                  height={100}
                />

                <img
                  src="/diesel-tank-2.jpg"
                  alt="services hero image"
                  className="rounded-full h-[60px] w-[100px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] object-cover xl:ml-16"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex justify-between mt-10  px-4">
              <div className="md:flex items-center gap-4 w-fit text-[#000]">
                <p className="flex items-center gap-3">
                  <MdLocalPhone size={24} />
                  <span className="text-sm md:text-base">
                    +234 806 064 8425, <br className="md:hidden" />
                    +1 (973) 303-0214
                  </span>
                </p>
                <a
                  href="mailto:sales@ampgatenigeria.com"
                  className="flex items-center gap-3"
                >
                  <CiMail size={24} className="text-white" color="#000" />
                  <span className="uppercase text-sm md:text-base">
                    Get a quote
                  </span>
                </a>
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
        </section>

        {/* ===Our Services==== */}
        <section className="max-w-7xl md:mt-20 mt-10 mx-auto py-10 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="border-[1.3px] border-[#FF8F06] p-2.5 rounded-xl mx-auto mb-4 w-[150px]">
              Our Services
            </p>
            <p>
              Discover a range of tailored services designed to power your
              success
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {/* ==== Generator Rentals === */}
            <div className="max-w-[380px] h-full border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
              <div>
                <img
                  src="/diesel-generator-set.jpg"
                  alt="about-us hero image"
                  className="rounded-xl h-[300px] w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold ">Generator Rentals</p>
                <p className="text-[#464646] font-light text-sm leading-6 mt-4">
                  Our diverse fleet of generators, load banks, and power
                  equipment is suitable for a wide range of applications, from
                  temporary power for events and construction sites to emergency
                  backup during power outages. Our equipment is meticulously
                  maintained and thoroughly tested to ensure maximum reliability
                  and performance
                </p>
              </div>
            </div>

            {/* ==== Equipment Sales === */}
            <div className="max-w-[380px] h-full border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
              <div>
                <img
                  src="/three-phase-transformer.png"
                  alt="about-us hero image"
                  className="rounded-xl h-[300px] w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold ">Equipment Sales</p>
                <p className="text-[#464646] font-light text-sm leading-6 mt-4">
                  In addition to rentals, we also offer a wide range of power
                  equipment available for purchase. From generators to load
                  banks and other power-related accessories, we provide
                  high-quality solutions that meet the unique requirements of
                  our customers
                </p>
              </div>
            </div>

            {/* ==== Maintenance services === */}
            <div className="max-w-[380px] h-full border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
              <div>
                <img
                  src="/maintenance-image.png"
                  alt="about-us hero image"
                  className="rounded-xl h-[300px] w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold ">Maintenance services</p>
                <p className="text-[#464646] font-light text-sm leading-6 mt-4">
                  We understand the critical nature of power equipment, and we
                  prioritize its reliability through prompt and efficient
                  maintenance services. Our team of skilled technicians provides
                  regular inspections, preventive maintenance, repairs, and 24/7
                  emergency support to ensure that your power systems are always
                  in optimal condition
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===Our Products==== */}
        <section className="max-w-7xl lg:mt-20 md:mt-20 mx-auto py-10 px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="border-[1.3px] border-[#FF8F06] it p-2.5 mx-auto md:mx-0 rounded-xl text-center mb-3 w-[150px]">
                Our Products
              </p>
              <p className="max-w-md text-center md:text-left">
                Discover a wide range of available products designed to power
                your success
              </p>
              <div className="max-w-md space-y-4 mt-10 text-sm font-light text-[#464646]">
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>
                    Gas and Diesel Rental Solution services from 500kVA to 20MW
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>
                    Transformer rental from 2.5MVA/11kv to
                    6.5MVA/415v/11kve/33kV
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Diesel power generation 500kVA up to 2MVA module</p>
                </div>
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Renewable Energy Generation for industrial solution</p>
                </div>

                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Load Bank Rental up to 5MW capacity</p>
                </div>
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Diesel Tanks: 3,000-10,000 litre diesel tanks</p>
                </div>

                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Logistics</p>
                </div>
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>
                    Project Management Engineering Generator sales and services
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/diesel-tank-2.jpg"
                // src="/services-hero-image-one.jpeg"
                alt="about-us hero image"
                className="rounded-xl h-[260px] md:h-[350px] lg:h-[550px] w-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>

        {/* ======WHY CHOOSE US SECTION====== */}
        <section className="max-w-7xl mx-auto mt-12 px-6 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <p className="border-[1.3px] border-[#FF8F06] w-fit p-2.5 rounded-xl mx-auto mb-8">
              Why Choose Us
            </p>
            <p>
              In the last 15 years, Ampgate has grown to serve oil and gas,
              utility, IPP, industrial and commercial segment of the economy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center lg:grid-cols-4 gap-6 mt-10">
            {/* ====== Card One ====== */}
            <div className="border md:max-w-[280px] text-center p-4 rounded-xl">
              <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full mx-auto">
                <img
                  src="./why-choose-us1.svg"
                  alt=" Customer Service Icon"
                  className="w-7 h-7"
                />
              </div>
              <p className="font-semibold my-4">Exceptional Customer Service</p>
              <p className="text-[#464646] font-thin text-lg ">
                We build lasting relationships by offering personalized
                attention, quick responses, and professional support every step
                of the way.
              </p>
            </div>
            {/* ====== Card Two ====== */}

            <div className="border md:max-w-[280px] text-center p-4 rounded-xl">
              <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full mx-auto">
                <img
                  src="./why-choose-us2.svg"
                  width={80}
                  height={80}
                  alt="Quality Icon"
                  className="w-8 h-8"
                />
              </div>
              <p className="font-semibold my-4">Quality and Reliability</p>
              <p className="text-[#464646] font-thin text-lg ">
                Our excellence shows in our top-quality equipment and services.
                Partnering with leading manufacturers to provide reliable
                solutions.
              </p>
            </div>

            {/* =====Card three===== */}

            <div className="border md:max-w-[280px] text-center p-4 rounded-xl">
              <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full mx-auto">
                <img
                  src="./why-choose-us3.svg"
                  alt="Flexibility Icon"
                  className="w-7 h-7"
                />
              </div>
              <p className="font-semibold my-4">
                Flexibility and Customization
              </p>
              <p className="text-[#464646] font-thin text-lg">
                We tailor our services to your unique power needs, working
                closely with you to provide solutions that fit your goals and
                budget.
              </p>
            </div>

            {/* ====== Card four ===== */}
            <div className="border md:max-w-[280px] text-center p-4 rounded-xl">
              <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full mx-auto">
                <img
                  src="./why-choose-us4.svg"
                  alt="Expertise Icon"
                  className="w-7 h-7"
                />
              </div>
              <p className="font-semibold my-4">Expertise and Experience</p>
              <p className="text-[#464646] font-thin text-lg">
                With extensive industry experience, we provide expert power
                solutions, staying current with trends and regulations all just
                for you.
              </p>
            </div>
          </div>
        </section>

        {/* ====Power Up your Business===== */}
        <section className="max-w-7xl mx-auto px-4 py-20 md:py-20">
          <div className="relative rounded-xl">
            <img
              src="/power-up-business-image.jpeg"
              alt="about-us hero image"
              className="rounded-xl h-[260px] md:h-[350px] lg:h-[450px] w-full object-cover"
              width={100}
              height={100}
            />
            <div className="absolute md:pt-12 lg:pt-24 rounded-xl inset-0 bg-black bg-opacity-60 text-[#ffffff] text-center">
              <p className="font-bold text-3xl md:px-20 md:text-5xl lg:text-7xl  p-6">
                Ready to Power Up Your Business?
              </p>
              <p className="text-lg">Let&apos;s Talk</p>
              <button className="text-[#ffffff] p-3 rounded-xl w-[150px] mt-3 md:mt-8 bg-[#FFB100] hover:bg-gradient-to-b hover:from-[#4a4a4a] hover:to-[#FFB100] transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* ======FOOTER SECTION====== */}
        <Footer />
      </div>
    </>
  );
}
