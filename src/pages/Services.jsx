import { Check } from "lucide-react";
import Navbar from "../components/navbar/Navbar";

export default function Services() {
  return (
    <>
      <div className="bg-[#F8F7F3]">
        {/* ======HERO SECTION====== */}
        <section className="bg-[#FEE9B1]">
          <div className="flex flex-col justify-between max-w-7xl mx-auto pb-20 px-6">
            <div>
              <Navbar />
            </div>
            <div className="text-center max-w-5xl mx-auto mt-14">
              <p className="font-bold text-3xl md:text-7xl">
                Tailored Energy Solutions to Drive Your Success
              </p>
              <p className="text-base p-3 md:text-base mt-3">
                At AMP Gate Nigeria, we offer a comprehensive range of energy
                services designed to meet your unique needs
              </p>
            </div>

            <div className="flex items-baseline justify-between gap-10 mt-10">
              <div className="space-y-6">
                <img
                  src="/services-hero-image-two.jpeg"
                  alt="services hero image"
                  className="rounded-full h-[60px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] object-cover lg:ml-10 xl:ml-20"
                  width={100}
                  height={100}
                />

                <img
                  src="/services-hero-image-three.jpeg"
                  alt="services hero image"
                  className="rounded-full h-[60px] md:h-[100px] md:w-[100px] lg:h-[180px] lg:w-[180px] object-cover"
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <img
                  src="/services-hero-image-one.jpeg"
                  alt="about-us hero image"
                  className="rounded-3xl md:rounded-full h-[100px] w-[260px] md:h-[240px] md:w-[550px] object-cover"
                  width={100}
                  height={100}
                />
              </div>

              <div className="space-y-6">
                <img
                  src="/services-hero-image-four.jpeg"
                  alt="services hero image"
                  className="rounded-full h-[60px] w-[60px] md:h-[100px] md:w-[100px] lg:h-[180px] lg:w-[180px] object-cover lg:mr-10 xl:mr-20"
                  width={100}
                  height={100}
                />

                <img
                  src="/services-hero-image-five.jpeg"
                  alt="services hero image"
                  className="rounded-full h-[60px] w-[100px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] object-cover xl:ml-16"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===Our Services==== */}
        <section className="max-w-7xl mx-auto py-10 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="border-[1.3px] border-[#000000] p-2.5 rounded-xl mx-auto mb-4 w-[150px]">
              Our Services
            </p>
            <p>
              Discover a range of tailored services designed to power your
              success
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {/* ==== CEO CARD === */}
            <div className="max-w-[380px] border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
              <div>
                <img
                  src="/generator-image.jpeg"
                  alt="about-us hero image"
                  className="rounded-xl h-[300px] w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold ">Generator Rentals</p>
                <p className="text-[#464646] font-light text-sm leading-6">
                  Our diverse fleet of generators, load banks, and power
                  equipment is suitable for a wide range of applications, from
                  temporary power for events and construction sites to emergency
                  backup during power outages. Our equipment is meticulously
                  maintained and thoroughly tested to ensure maximum reliability
                  and performance
                </p>
              </div>
            </div>

            {/* ==== CTO CARD === */}
            <div className="max-w-[380px] border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
              <div>
                <img
                  src="/equipment-image.jpeg"
                  alt="about-us hero image"
                  className="rounded-xl h-[300px] w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold ">Equipment Sales</p>
                <p className="text-[#464646] font-light text-sm leading-6">
                  In addition to rentals, we also offer a wide range of power
                  equipment available for purchase. From generators to load
                  banks and other power-related accessories, we provide
                  high-quality solutions that meet the unique requirements of
                  our customers
                </p>
              </div>
            </div>

            {/* ==== COO CARD === */}
            <div className="max-w-[380px] border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4">
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
                <p className="font-semibold ">Equipment Sales</p>
                <p className="text-[#464646] font-light text-sm leading-6">
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
        <section className="max-w-7xl mx-auto py-10 px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="border-[1.3px] border-[#000000] it p-2.5 rounded-xl text-center mb-3 w-[150px]">
                Our Products
              </p>
              <p className="max-w-md">
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
                src="/services-hero-image-one.jpeg"
                alt="about-us hero image"
                className="rounded-xl h-[260px] md:h-[350px] lg:h-[550px] w-full object-cover"
                width={100}
                height={100}
              />
            </div>
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
              <div className="w-10 h-10 bg-black rounded-full mx-auto"></div>
              <p className="font-semibold my-4">Exceptional Customer Service</p>
              <p className="text-[#464646] font-thin text-lg ">
                We build lasting relationships by offering personalized
                attention, quick responses, and professional support every step
                of the way
              </p>
            </div>
            {/* ====== Card Two ====== */}

            <div className="border md:max-w-[280px] text-center p-4 rounded-xl">
              <div className="w-10 h-10 bg-black rounded-full mx-auto"></div>
              <p className="font-semibold my-4">Quality and Reliability</p>
              <p className="text-[#464646] font-thin text-lg ">
                Our excellence shows in our top-quality equipment and services.
                Partnering with leading manufacturers to provide reliable
                solutions.
              </p>
            </div>

            {/* =====Card three===== */}

            <div className="border md:max-w-[280px] text-center p-4 rounded-xl">
              <div className="w-10 h-10 bg-black rounded-full mx-auto"></div>
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
              <div className="w-10 h-10 bg-black rounded-full mx-auto"></div>
              <p className="font-semibold my-4">Expertise and Experience</p>
              <p className="text-[#464646] font-thin text-lg">
                With extensive industry experience, we provide expert power
                solutions, staying current with trends and regulations
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
              <button className="bg-[#FFB100] text-[#ffffff] p-3 rounded-xl w-[150px] mt-3 md:mt-8">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
