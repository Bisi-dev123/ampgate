import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <section>
        <div className="p-3 py-10 bg-[#F8F7F3]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
            className="flex flex-col justify-center items-center"
          >
            <p className="border-[1.3px] border-[#FF8F06] p-2 px-4 rounded-2xl text-center mb-3 w-[180px]">
              About Us
            </p>
            <p className="text-center px-4">
              We have a commitment to reliability and innovation
            </p>
          </motion.div>
        </div>
        <div>
          <section className="bg-[#161616] py-14">
            <div className="text-[#ffffff] p-6  md:flex md:gap-24 max-w-7xl mx-auto">
              {/* === Images ===== */}
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
                className="lg:w-[550px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", duration: 3 }}
                >
                  <img
                    src="/cat-generator.jpeg"
                    alt="about-us hero image"
                    className="rounded-xl h-[260px] md:h-[350px] lg:h-[550px] w-full object-cover"
                    width={100}
                    height={100}
                  />
                </motion.div>
              </motion.div>

              {/* =====Our Company ==== */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="text-xl w-full mt-12 max-w-[400px] leading-10 font-light"
              >
                <p>
                  Ampgate is a private company limited with Company Number RC
                  no:2007759. While Ampgate has been serving clients for the
                  past 15 years, it was incorporated in December 7th 2022 to
                  enable the company better serve our clients which include oil
                  and gas, utility, IPP, industrial and commercial segments of
                  the economy.
                </p>
                <button className="bg-[#FFB100] text-[#FFFFFF] w-[130px] p-3 rounded-2xl text-sm mt-10 hover:bg-gradient-to-b hover:from-[#4a4a4a] hover:to-[#FFB100] transition-all duration-300">
                  Read More
                </button>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
