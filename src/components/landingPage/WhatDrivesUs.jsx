import { motion } from "framer-motion";

export default function WhatDrivesUs() {
  return (
    <div className="p-3 pt-14 lg:pt-20 pb-10 bg-[#F8F7F3]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 3 }}
        className="flex flex-col justify-center items-center"
      >
        <p className="border-[1.3px] border-[#FF8F06] p-2.5 px-4 rounded-2xl text-center mb-3 w-[200px]">
          What Drives Us
        </p>
        <p className="text-center">
          Our aspirations guide our path, while our purpose anchors our actions.
        </p>
      </motion.div>
    </div>
  );
}
