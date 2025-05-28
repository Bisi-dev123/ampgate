import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <>
      <section className="bg-[#FEE9B1] mt- py-10 lg:p-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:flex gap-10 w-full">
            {/* =====Card ===== */}
            <div className="md:w-[40%] gap-4 flex flex-col">
              {/* ====Mission Card==== */}
              <div className="p-6 bg-[#ffffff] max-w-[370px] flex  gap-4 rounded-2xl">
                <div className="h-16 w-20 bg-[#FFB100] rounded-xl" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", duration: 3 }}
                  className="space-y-4"
                >
                  <p className="text-[#FFB100] font-medium text-2xl uppercase">
                    Mission
                  </p>
                  <p className="leading-8 text-sm">
                    At Ampgate Limited, our mission is to empower businesses and
                    communities by delivering innovative, reliable, and
                    efficient power solutions. We are committed to excellence,
                    sustainability, and customer satisfaction, ensuring
                    uninterrupted energy for critical operations and everyday
                    needs.
                  </p>
                </motion.div>
              </div>
              {/* ====Vision Card==== */}
              <div className="p-6 bg-[#ffffff] max-w-[370px] flex  gap-4 rounded-2xl">
                <div className="h-16 w-20 bg-[#FFB100] rounded-xl" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", duration: 3 }}
                  className="space-y-4"
                >
                  <p className="text-[#FFB100] font-medium text-2xl uppercase">
                    Vision
                  </p>
                  <p className="leading-8 text-sm">
                    Our vision is to be the leading provider of power solutions
                    in Africa and beyond, driving growth and innovation while
                    setting industry standards for reliability, sustainability,
                    and service excellence. We aim to create a brighter, more
                    connected future powered by Ampgate Limited.
                  </p>
                </motion.div>
              </div>
            </div>
            {/* ====Mission & vision image ==== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 3 }}
              className="md:w-[60%] mt-10  md:mt-0 flex items-center justify-center"
            >
              <img
                src="/mission-vision-image.png"
                alt="about-us hero image"
                className="rounded-xl w-[300px] h-[350px] md:h-[645px] md:w-[700px] w-ful object-cover"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Comprehensive Servicesy</p>
              </div>
              <div className="flex items-center justify-center gap-4 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Customer-Centric Approach</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 3 }}
              className="space-y-4"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 3 }}
              className="space-y-4"
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
