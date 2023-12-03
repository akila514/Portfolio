"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-20 sm:mb-40 px-5 md:px-0 max-w-[53rem] scroll-mt-28 text-center flex mx-auto items-center flex-col"
    >
      <h1 className="mb-5 font-bold text-3xl">My skills</h1>
      <ul className="flex flex-wrap justify-center gap-2 text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border flex flex-row space-x-2 border-black/10 rounded-3xl px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-white/20 transition"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span>{skill.skill}</span>
            <div className="opacity-70">
              {skill.icon && React.createElement(skill.icon, { size: 20 })}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
