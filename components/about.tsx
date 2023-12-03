"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 flex mx-auto flex-col"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h1 className="text-3xl mb-5 font-bold">About me</h1>
      <p className="mb-3 px-5 md:px-0">
        I'm <span className="font-medium">Akila Jayawardana</span>, After doing
        A\L exam, I decided to pursue my passion for programming. I enrolled in
        IJSE Institute and learned{" "}
        <span className="font-medium">Java and Web Development</span>. I'm
        currently studying in Informatics Institute of Technology | IIT Campus.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Intern position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and playing cricket. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  );
}
