"use client";
import React, { useState } from "react";
import youtubue from "../../../public/icons8-youtube.svg";
import insta from "../../../public/insta.svg";
import donate from "../../../public/icons8-donate-48.png";
import zap from "../../../public/icons-whatsapp.svg";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

export const EmailSection = () => {
  const formInitialDetails = {
    email: "",
    message: "",
    subject: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails((state) => ({
      ...state,
      [category]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    try {
      if (formDetails.email === "" || formDetails.message === "" || formDetails.subject === "") {
        throw new Error("Preencha todos os campos");
      }

      let response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Enviar");

      if (response.status !== 200) throw new Error("Ocorreu um erro ao buscar");

      setEmailSubmitted(true);
      setFormDetails(formInitialDetails);
      toast.success("Mensagem enviada com sucesso!");
    } catch (error) {
      setButtonText("Enviar");
      toast.error(error.message);
      // toast.error("Erro ao enviar contato, tente novamente!");
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          {" "}
          muita atenção ao realizar uma compra, não haverá reembolso! acione o
          nosso sac para tirar as dúvidas antes de realizar a compra verifique
          os status dos servidores antes de realizar a compra não somos
          responsáveis por nenhum procedimento, apenas fazemos a intermediação
          entre você e o serviço desejado. faça com responsabilidade e dentro da
          legalidade!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.instagram.com/imports_cel1/" target="_blank">
            <Image src={insta} alt="Instagram Icon" />
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=UwAdx-p1WzQ"
            target="_blank"
          >
            <Image src={youtubue} alt="Youtube Icon" />
          </Link>
          <Link
            href="https://sacola.pagseguro.uol.com.br/1104420c-0410-43ce-8f1a-da11d659293d"
            target="_blank"
          >
            <Image src={donate} alt="Donate Icon" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=17981508885"
            target="_blank"
          >
            <Image src={zap} alt="Whatsapp Icon" />
          </Link>
        </div>
      </div>
      <div>
        {/* <p className="text-green-500 text-sm mt-2">Email sent successfully!</p> */}

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Seu e-mail
            </label>
            <input
              type="email"
              value={formDetails.email}
              placeholder="Email"
              onChange={(e) => onFormUpdate("email", e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Assunto
            </label>
            <input
              value={formDetails.subject}
              placeholder="Digite o assunto do contato"
              onChange={(e) => onFormUpdate("subject", e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
              rows="6"
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Escreva a mensagem..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            <span>{buttonText}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
