"use client";

import React, { useState, useEffect } from "react";
import { STABLES } from "@/stables";

const Form = ({ texts }: { texts: any }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(
          `${STABLES.API_URL}/config/66492e49eb38e1a64a281be9?locale=undefined&draft=false&depth=1`
        );
        const info = await response.json();
        setRecipientEmail(info.mail);
      } catch (error) {
        console.error("Error fetching config:", error);
      }
    };

    fetchConfig();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, to: recipientEmail }),
      });

      if (res.ok) {
        setStatus(texts.success);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(texts.error);
      }
    } catch (error) {
      setStatus(texts.error);
    }

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-1/2 flex flex-col gap-4 mx-auto"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-sm text-dark-gray/60 text-right">{texts.span}</h1>
        <label htmlFor="name">{texts.name} *</label>
        <input
          type="text"
          id="name"
          required
          name="name"
          className="placeholder:text-black/50 active:bg-gray/20 border-b border-transparent focus:border-black focus:outline-none bg-gray/20 px-3 py-2 w-full"
          placeholder={texts.name_placeholder}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">{texts.email} *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder={texts.email_placeholder}
          className="placeholder:text-black/50 active:bg-gray/20 border-b border-transparent focus:border-black focus:outline-none bg-gray/20 px-3 py-2 w-full"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">{texts.message} *</label>
        <textarea
          required
          id="message"
          name="message"
          className="min-h-40 resize-none placeholder:text-black/50 active:bg-gray/20 border-b border-transparent focus:border-black focus:outline-none bg-gray/20 px-3 py-2 w-full"
          placeholder={texts.message_placeholder}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        className="self-end w-full md:w-auto px-16 text-lg hover:bg-dark-gray transition py-3 bg-black font-light text-white"
        type="submit"
      >
        {texts.send}
      </button>
      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
};

export default Form;
