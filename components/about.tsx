"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Civil Aviation</span>, I decided to pursue
        my passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        bulding and creation aspect. I <span className="underline">love</span>{" "}
        the feeling of the end result i build. My core stack is{" "}
        <span className="font-medium">
          Java, Spring Boot, React, JavaScript and PostqreSql
        </span>
        . I am also familiar with TypeScript, Node.js and Next.js. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and doing workout. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        preparing for the{" "}
        <span className="font-medium">
          IELTS exam for my English and also learning Machine Learning.
        </span>
        .
      </p>
    </motion.section>
  );
}
