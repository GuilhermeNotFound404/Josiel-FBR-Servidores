"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "SrTool",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Segurança</li>
        <li>Ferramenta</li>
        <li>Sniffing</li>
        <li>Hacking</li>
        <li>Pentest</li>
        <li>Vulnerabilidades</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Desbloqueio</li>
        <li>Restauração</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Desbloqueador</li>
        <li>Desvinculação</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre</h2>
          <p className="text-base lg:text-lg">
          Nosso servidor funciona de forma autônoma, 24 horas por dia e 7 dias por semana. 
        Aqui você encontrará os melhores serviços de servidor, além de box digitais, créditos para servidores e o melhor
suporte para te atender. Sinta-se a vontade para entrar no nossos grupos no WHATSAPP e TELEGRAM clicando nos links
acima. Sempre realizamos sorteiros de diversos prêmios. Além disso, nosso canal no youtube sempre trará novidades
e dicas incríveis para você solucionar seus problemas no dia a dia da bancada da forma mais eficiente possível.  
Para você que está chegando agora e quer conhecer como funciona nosso servidor, preparamos este vídeo ao lado
para te ajudar a explorar melhor nosso site, mas, se mesmo assim ainda tiver dúvidas, observe que logo abaixo disponibilizamos e-mail e whatsapp para atendimento de suporte 24h.
josiel frp chegou para ser o  melhor servidor BR. Vamos crescer juntos.            
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              SharkTool{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Global Unlocker{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              MagicTool{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
