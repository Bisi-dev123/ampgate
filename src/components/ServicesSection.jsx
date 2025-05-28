import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 3 }}
        className="max-w-7xl mx-auto py-10 px-4 lg:py-32"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="border-[1.3px] border-[#FF8F06] p-2.5 rounded-xl mx-auto mb-4 w-[150px]">
            Our Services
          </p>
          <p>
            Discover a range of tailored services designed to power your success
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {/* ==== Generator Rentals === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
            className="max-w-[380px] h-full border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4"
          >
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
                Our diverse fleet of generators, load banks, and power equipment
                is suitable for a wide range of applications, from...
              </p>
              <a
                href="/services"
                className="text-[#FFB100] hover:text-[#FFB100]-700 hover:underline"
              >
                Read More
              </a>
            </div>
          </motion.div>

          {/* ==== Equipment Sales === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
            className="max-w-[380px] h-full border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4"
          >
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
                equipment available for purchase. From generators, to load banks
                and...
              </p>
              <a
                href="/services"
                className="text-[#FFB100] hover:text-[#FFB100]-700 hover:underline"
              >
                Read More
              </a>
            </div>
          </motion.div>

          {/* ==== Maintenance services === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
            className="max-w-[380px] h-full border rounded-xl shadow-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4"
          >
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
                prioritize its reliability through prompt and efficient...
              </p>
              <a
                href="/services"
                className="text-[#FFB100] hover:text-[#FFB100]-700 hover:underline"
              >
                Read More
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
