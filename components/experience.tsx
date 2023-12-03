"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 flex items-center flex-col mx-auto sm:mb-40 text-gray-700"
    >
      <h1 className="font-bold text-3xl mb-5">My experience</h1>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#fff",
                color: "#000",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
              }}
            >
              <h3 className="">{item.title}</h3>
              <p className="">{item.location}</p>
              <p className="">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
