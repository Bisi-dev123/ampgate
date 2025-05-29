import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function OurProductSection() {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-10 px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
          >
            <p className="border-[1.3px] border-[#FF8F06] it p-2.5 mx-auto md:mx-0 rounded-xl text-center mb-3 w-[150px]">
              Our Products
            </p>
            <p className="max-w-md text-center md:text-left">
              Discover a wide range of available products designed to power your
              success
            </p>
            <div className="max-w-md space-y-4 mt-10 text-sm font-light text-[#464646]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>
                  Gas and Diesel Rental Solution services from 500kVA to 20MW
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>
                  Transformer rental from 2.5MVA/11kv to 6.5MVA/415v/11kve/33kV
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Diesel power generation 500kVA up to 2MVA module</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Renewable Energy Generation for industrial solution</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Load Bank Rental up to 5MW capacity</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Diesel Tanks: 3,000-10,000 litre diesel tanks</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>Logistics</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>
                  Project Management & Engineering 
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                className="flex items-center justify-center gap-4 w-fit"
              >
                <div className="h-8 w-8 rounded-full bg-[#33B333] flex items-center justify-center">
                  <Check color="#FFFFFF" />
                </div>
                <p>
                  EPC - Generator Sales and Services
                </p>
              </motion.div>
            </div>
          </motion.div>
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
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 3 }}
            >
              <img
                src="/load-bank-3.jpg"
                alt="about-us hero image"
                className="rounded-xl h-[260px] md:h-[350px] lg:h-[550px] w-full object-cover"
                width={100}
                height={100}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
