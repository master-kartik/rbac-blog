import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { AuroraBackground } from "../ui/aurora-background";

export function Spotlight() {
  return (
    <AuroraBackground className={"-mt-32"}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl tracking-tighter font-bold dark:text-white text-center pt-10">
          Welcome to the Future of Creativity with AI
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Read now and embark on a journey with us
        </div>
        <Link to="/search">
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Read It All
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
