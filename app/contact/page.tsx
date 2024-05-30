import { STABLES } from "@/stables";
import React from "react";

const page = async () => {
  const data = await fetch(`${STABLES.API_URL}/config/66492e49eb38e1a64a281be9?locale=undefined&draft=false&depth=1`);
  const info = await data.json();

  console.log(info);
  
  const sendEmail = async () => {
    "use server";
    console.log("Sending email");
  };
  
  return (
    <section className="px-5 lg:px-16 mt-5">
      <form className="md:w-1/2 flex flex-col gap-4 mx-auto" action={sendEmail}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2  active:bg-transparent focus:bg-transparent bg-transparent border-gray px-3 py-2 w-full"
            placeholder="Your Name..."
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email..."
            className="border-2  active:bg-transparent focus:bg-transparent bg-transparent border-gray px-3 py-2 w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message *</label>
          <textarea
            required
            id="message"
            name="message"
            className="border-2 min-h-40 resize-none active:bg-transparent focus:bg-transparent bg-transparent border-gray px-3 py-2 w-full"
            placeholder="Your Message..."
          />
        </div>
        <button
          className="self-end w-full md:w-auto px-16 text-lg hover:bg-dark-gray transition py-3 bg-black font-light text-white "
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default page;
