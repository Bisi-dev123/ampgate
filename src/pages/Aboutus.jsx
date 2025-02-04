import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Check } from "lucide-react";
import Navbar from "/src/components/navbar/Navbar";
import MobileNavbar from "/src/components/navbar/MobileNavbar";
import Footer from "/src/components/footer/Footer";
import { Link } from "react-router-dom";


export default function Aboutus() {
  return (
    <>
      <div className="bg-[#F8F7F3]">
        {/* ======HERO SECTION====== */}
        <section className="bg-[#FED24C]">
          <div className="flex flex-col justify-between max-w-7xl mx-auto pb-40 md:pb-20">
            <div>
              <Navbar />
              <MobileNavbar />
            </div>
            <div className="text-center max-w-4xl mx-auto mt-32 md:mt-8 px-4">
              <p className="font-bold text-3xl md:text-7xl">
                Empowering a Brighter Future Together
              </p>
              <p className="text-base p-3 md:text-base mt-6">
                At AMP Gate Nigeria, we are passionate about delivering
                reliable, innovative, and sustainable energy solutions
              </p>
            </div>
            <div className="relative mt-16 mx-4">
              <img
                src="/about-us-hero-image.jpeg"
                alt="about-us hero image"
                className="rounded-xl md:h-[505px] w-full object-cover"
                width={100}
                height={100}
              />
              <div className="flex justify-between absolute mt-6 md:mt-0 md:bottom-60 w-full md:text-[#ffffff]">
                <div className="md:flex items-center gap-4 w-fit">
                  <p className="flex items-center gap-3">
                    <MdLocalPhone size={24} />
                    <span className="text-sm md:text-base">
                      +234 806 064 8425, +1 (973) 303-0214
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <CiMail size={24} className="md:text-[#ffffff]" />
                    <span className="uppercase text-sm md:text-base">
                      Get a quote
                    </span>
                  </p>
                </div>
                <a
                href="https://api.whatsapp.com/send/?phone=2348060648425&text=Welcome+to+Ampgate!+How+may+we+be+of+service+today?&type=phone_number&app_absent=0"
                target="_blank"
              >
                <div className="bg-[#ffffff] text-[#1e1e1e] p-2  px-6 h-fit flex justify-center items-center gap-2 rounded-3xl font-normal fixed bottom-10 right-10 animate-bounce">
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
        {/* ======ABOUT AMPGATE SECTION====== */}
        <section className="grid md:grid-cols-2 gap-20 py-14 max-w-7xl mx-auto px-6">
          <div>
            <p className="text-2xl font-bold">About Ampgate</p>
            <p className="leading-9 mt-8">
              Ampgate is a private company limited with Company Number RC
              no:2007759. While Ampgate has been serving clients for the past 15
              years, it was incorporated in December 7th 2022 to enable the
              company better serve our clients which include oil and gas,
              utility, IPP, industrial and commercial segments of the economy.
            </p>
          </div>
          <div>
            <img
              src="/ampgate-staffs-image.jpeg"
              alt="about-us hero image"
              className="rounded-xl h-[350px] w-full object-cover"
              width={100}
              height={100}
            />
          </div>
        </section>
        {/* ======POWER UP POTENTIALS SECTION====== */}
        <section className="grid md:grid-cols-2 gap-20 py-14 max-w-7xl mx-auto px-6">
          <div>
            <img
              src="/ampgate-solar-image.jpeg"
              alt="about-us hero image"
              className="rounded-xl h-[350px] w-full object-cover"
              width={100}
              height={100}
            />
          </div>
          <div>
            <p className="text-2xl font-bold">We Power up your Potentials!</p>
            <p className="leading-9 mt-8">
              Ampgate Limited is a leading provider of power solutions, ranging
              from generator, load bank, logistic, engineering, project
              management and general power equipment rentals and sales and
              provision of maintenance services. With our unwavering commitment
              to customer satisfaction and a wide range of top-quality power
              solutions, we have established ourselves as a trusted partner for
              businesses and individuals in need of reliable and efficient power
              systems.
            </p>
          </div>
        </section>

        {/* ======WHY CHOOSE US SECTION====== */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <p className="border-[1.3px] border-[#000000] w-fit p-2.5 rounded-xl mx-auto mb-8">
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
                <img src="./why-choose-us1.svg" alt="Customer Service Icon" className="w-7 h-7" />
              </div>
              <p className="font-semibold my-4">Exceptional Customer Service</p>
              <p className="text-[#464646] font-thin text-lg ">
                We build lasting relationships by offering personalized
                attention, quick responses, and professional support every step
                of the way
              </p>
            </div>
            {/* ====== Card Two ====== */}

            <div className="border md:max-w-[280px] text-center p-4 rounded-xl">
              <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full mx-auto">
                <img src="./why-choose-us2.svg" alt="Quality Icon" className="w-7 h-7" />
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
                <img src="./why-choose-us3.svg" alt="Flexibility Icon" className="w-7 h-7" />
              </div>
              <p className="font-semibold my-4">
                Flexibility and Customization
              </p>
              <p className="text-[#464646] font-thin text-lg">
                We tailor our services to your unique power needs, working
                closely with you to provide solutions that fit your goals and
                budget
              </p>
            </div>

            {/* ====== Card four ===== */}
            <div className="border md:max-w-[280px] text-center p-4 rounded-xl">
              <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full mx-auto">
              <img src="./why-choose-us4.svg" alt="Expertise Icon" className="w-7 h-7" />
              </div>
              <p className="font-semibold my-4">Expertise and Experience</p>
              <p className="text-[#464646] font-thin text-lg">
                With extensive industry experience, we provide expert power
                solutions, staying current with trends and regulations all just for you.
              </p>
            </div>
          </div>
        </section>

        {/* ======Our Expert team ==== */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <p className="border-[1.3px] border-[#000000] w-fit p-2.5 rounded-xl mx-auto mb-8">
              Our Expert Team
            </p>
            <p>Ampgate Team: Powering Your Business with Expertise</p>
          </div>

          <div className="relative mt-16 rounded-3xl">
            <img
              src="/expert-team-image.jpeg"
              alt="about-us hero image"
              className="rounded-xl h-[1000px] :h-[50p] md:h-[450px] w-full object-cover"
              width={100}
              height={100}
            />

            <p className="absolute inset-0 bg-black bg-opacity-70 text-lg flex items-center text-[#ffffff] font-medium p-4 text-center rounded-xl leading-8  md:px-20">
              At Ampgate, we believe that our team is our greatest asset. Our
              team of experienced and knowledgeable professionals is dedicated
              to providing our customers with the highest quality power
              solutions and services. Our team members come from a variety of
              backgrounds, including engineering, project management, and
              logistics. This diversity of experience allows us to provide our
              customers with a comprehensive range of services, from designing
              and implementing power systems to transporting and maintaining
              equipment. We are committed to providing our team members with the
              training and resources they need to be successful. We also
              encourage our team members to collaborate and share knowledge, so
              that we can provide our customers with the best possible service
            </p>
          </div>
        </section>

        {/* ===Greatest Assets==== */}
        <section className="max-w-7xl mt-20 mx-auto">
          <p className="text-center text-base font-medium lg:text-2xl lg:font-bold">
            Meet our greatest assets
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {/* ==== CEO CARD === */}
            <div className="max-w-[350px] border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
              <div>
                <img
                  src="/expert-ceo-image.jpeg"
                  alt="about-us hero image"
                  className="rounded-xl h-[300px] w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold ">Gbenga Olanipon</p>
                <p className="font-light">Founder & CEO</p>
              </div>
            </div>

            {/* ==== CTO CARD === */}
            <div className="max-w-[350px] border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
              <div>
                <img
                  src="/expert-ceo-image.jpeg"
                  alt="about-us hero image"
                  className="rounded-xl h-[300px] w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold ">John Doe</p>
                <p className="font-light">CTO</p>
              </div>
            </div>

            {/* ==== COO CARD === */}
            <div className="max-w-[350px] border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
              <div>
                <img
                  src="/expert-ceo-image.jpeg"
                  alt="about-us hero image"
                  className="rounded-xl h-[300px] w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold ">John Doe</p>
                <p className="font-light">COO</p>
              </div>
            </div>
          </div>
        </section>

        {/* ====Mission & Vision ==== */}
        <section className="bg-[#FEE9B1] mt-20 py-10 lg:p-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="md:flex gap-10 w-full">
              {/* =====Card ===== */}
              <div className="md:w-[40%] gap-4 flex flex-col">
                {/* ====Mission Card==== */}
                <div className="p-6 bg-[#ffffff] max-w-[370px] flex  gap-4 rounded-2xl">
                  <div className="h-16 w-20 bg-[#FFB100] rounded-xl" />
                  <div className="space-y-4">
                    <p className="text-[#FFB100] font-medium text-2xl uppercase">
                      Mission
                    </p>
                    <p className="leading-8 text-sm">
                      At Ampgate Limited, our mission is to empower businesses
                      and communities by delivering innovative, reliable, and
                      efficient power solutions. We are committed to excellence,
                      sustainability, and customer satisfaction, ensuring
                      uninterrupted energy for critical operations and everyday
                      needs.
                    </p>
                  </div>
                </div>
                {/* ====Vision Card==== */}
                <div className="p-6 bg-[#ffffff] max-w-[370px] flex  gap-4 rounded-2xl">
                  <div className="h-16 w-20 bg-[#FFB100] rounded-xl" />
                  <div className="space-y-4">
                    <p className="text-[#FFB100] font-medium text-2xl uppercase">
                      Vision
                    </p>
                    <p className="leading-8 text-sm">
                      Our vision is to be the leading provider of power
                      solutions in Africa and beyond, driving growth and
                      innovation while setting industry standards for
                      reliability, sustainability, and service excellence. We
                      aim to create a brighter, more connected future powered by
                      Ampgate Limited.
                    </p>
                  </div>
                </div>
              </div>
              {/* ====Mission & vision image ==== */}
              <div className="md:w-[60%] mt-10  md:mt-0 flex items-center justify-center">
                <img
                  src="/mission-vision-image.png"
                  alt="about-us hero image"
                  className="rounded-xl w-[300px] h-[350px] md:h-[645px] md:w-[700px] w-ful object-cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Comprehensive Services</p>
                </div>
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Customer-Centric Approach</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Timely Delivery</p>
                </div>
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Reliability & Performance</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p>Expertise You Can Trust</p>
                </div>
                <div className="flex items-center justify-center gap-4 w-fit">
                  <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                    <Check color="#FFFFFF" />
                  </div>
                  <p> Commitment to Sustainability</p>
                </div>
              </div>
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
              <Link to="/contact-us" className=" block mx-auto bg-[#FFB100] hover:bg-gradient-to-b hover:from-[#4a4a4a] hover:to-[#FFB100] transition-all duration-300 text-[#ffffff] p-3 rounded-xl w-[150px] mt-3 md:mt-8">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ======FOOTER SECTION====== */}
        <Footer />
      </div>
    </>
  );
}
