'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserCheck } from "lucide-react";

export default function DriverProfessionals({ path, title, content, flip, alt }) {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: inView ? 1 : 0.6,
        scale: inView ? 1 : 0.92, // ✅ shrink down when out of view
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="py-5 bg-white md:w-[90%] max-w-[95%] rounded-2xl shadow-custom"
    >
      <div
        className={`container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 ${flip}`}
      >
        <div className="w-full md:w-1/2 h-full">
        <img
        src={path}
        alt={alt}
        className="rounded-2xl shadow-lg w-full h-[280px] sm:h-[340px] lg:h-[380px] object-cover"
        />

        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
          <p className="text-gray-700 mb-6">{content}</p>
        </div>
      </div>
    </motion.section>
  );
}
