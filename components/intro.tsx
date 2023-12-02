"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] flex mx-auto text-center sm:mb-0 scroll-mt-[100rem] flex-col"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="text-2xl font-bold sm:text-3xl my-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm Akila
      </motion.h1>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm a <span className="font-bold">full-stack developer</span> looking
        for a <span className="font-bold">Internship</span>. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-2 px-4 font-medium justify-evenly"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-x-105 transition cursor-pointer"
          href=""
        >
          Contact me
          <MdOutlineEmail className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        <a
          className="group  px-7 py-3  bg-gray-100 flex border border-black/10 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-x-105 transition cursor-pointer"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href=""
          target="_blank"
          className="flex flex-row group outline-none focus:scale-110 hover:scale-110 active:scale-x-105 transition"
        >
          <FaGithub size={40} />
          <span className="flex my-auto ml-2">Github</span>
        </a>
        <a
          href=""
          target="_blank"
          className="flex flex-row group outline-none focus:scale-110 hover:scale-110 active:scale-x-105 transition"
        >
          <FaLinkedin size={40} />
          <span className="flex my-auto ml-2">Linkedin</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;