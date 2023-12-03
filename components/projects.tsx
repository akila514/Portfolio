"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 sm:mb-40 mb-20 flex flex-col mx-auto items-center justify-center px-5 md:px-0"
    >
      <h1 className="text-3xl mb-5 font-bold">My projects</h1>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
