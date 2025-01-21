export default function Services() {
  return <div>
    {/* ===Our Services==== */}
    <section className="max-w-7xl mx-auto py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="border-[1.3px] border-[#000000] p-2.5 rounded-xl mx-auto mb-4 w-[150px]">
            Our Services
          </p>
          <p>
            Discover a range of tailored services designed to power your success
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
                Our diverse fleet of generators, load banks, and power equipment
                is suitable for a wide range of applications, from...
              </p>
              <a href="" className="text-[#FFB100] hover:text-[#FFB100]-700 hover:underline">
              Read More
              </a>
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
                equipment available for purchase. From generators to load banks...
              </p>
              <a href="" className="text-[#FFB100] hover:text-[#FFB100]-700 hover:underline">
              Read More
              </a>
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
              <p className="font-semibold ">Maintainance services</p>
              <p className="text-[#464646] font-light text-sm leading-6">
                We understand the critical nature of power equipment, and we
                prioritize its reliability through prompt and efficient...
              </p>
              <a href="" className="text-[#FFB100] hover:text-[#FFB100]-700 hover:underline">
              Read More
              </a>
            </div>
          </div>
        </div>
      </section>
  </div>;
} 
