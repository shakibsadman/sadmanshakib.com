"use client";

import { motion } from "framer-motion";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default function AvailabilityBanner() {
  const month = new Date().getMonth();
  return (
    <div className="min-h-40 bg-black flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative overflow-hidden rounded-full px-6 py-3"
        style={{
          background: "linear-gradient(90deg, rgba(37,38,99,0.7) 0%, rgba(87,70,155,0.7) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-2 text-lg"
        >
          <span className="text-[#8B9EFF] font-medium">Limited Availability:</span>
          <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            {`1 Spot for ${months[month]}`}
          </span>
        </motion.div>

        {/* Animated glow effect */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{ filter: "blur(8px)" }}
        />
      </motion.div>
    </div>
  );
}