"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Voice controller",
    description: "Voice controller",
    image: "/images/projects/1.jpeg",
    tag:["All","Projects","Work"],
    gitUrl: "https://github.com/saadabdullah9/VOICE-CONTROLLER",
    previewUrl: "https://github.com/saadabdullah9/VOICE-CONTROLLER",
  },
  {
    id: 2,
    title: "Chatbot",
    description: "Chatbot",
    image: "/images/projects/2.jpeg",
    tag:["All","Projects","Work"],
    gitUrl: "https://github.com/saadabdullah9/memoona-Saad-Asif-assistant-",
    previewUrl: "https://github.com/saadabdullah9/memoona-Saad-Asif-assistant-",
  },
  {
    id: 3,
    title: "Stock prediction",
    description: "Stock prediction",
    image: "/images/projects/3.jpeg",
    tag:["All","Projects","Work"],
    gitUrl: "https://github.com/saadabdullah9/Stock-prediction",
    previewUrl: "https://github.com/saadabdullah9/Stock-prediction",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
