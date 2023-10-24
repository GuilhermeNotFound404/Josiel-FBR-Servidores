"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SharkTool - 10 Créditos - R$ 89,00",
    description: "PEDIDO CONTA NOVA SHARK TOOL  10 CREDITO R$ 89,00",
    image: "/images/projects/card.png",
    tag: ["Loja"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SharkTool - 10 Créditos - R$ 59.00",
    description: "PEDIDO CONTA  ANTIGA SHARK TOOL  10 CREDITO R$59,00",
    image: "/images/projects/card.png",
    tag: ["Loja"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "The Magic Tool - Desbloqueio Motorola - R$60,00",
    description: "PEDIDO CONTA  DESBLOQUEIO  MOTOROLA  AQUI R$60,00",
    image: "/images/projects/card.png",
    tag: ["Loja"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "USB Redirector Client - R$65,00",
    description: "USB Redirector Client FAÇA SUA COMPRA ",
    image: "/images/projects/card.png",
    tag: ["Loja"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Criar Conta The Magic Tool",
    description: "Assista o tutorial para cria sua conta no The Magic Tool",
    image: "/images/projects/card.png",
    tag: [ "Tutorial"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Aprenda desbloqueio via remoto PASSO A PASSO - R$ 123,00",
    description: "APRENDA DESBLOQUEIO VIA REMOTO PASSO A PASSO ",
    image: "/images/projects/card.png",
    tag: ["Tutorial"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Aprenda desbloquear com a ferramenta - R$ 87,00",
    description: "APRENDA DESBLOQUEAR COM A FERRAMENTA PASSO A PASSO ",
    image: "/images/projects/card.png",
    tag: ["Tutorial"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Loja");
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
        Loja
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Loja"
          isSelected={tag === "Loja"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Tutorial"
          isSelected={tag === "Tutorial"}
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
