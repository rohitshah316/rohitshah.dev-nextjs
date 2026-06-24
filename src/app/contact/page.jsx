"use client";

import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef(null);

  const theme = "light";

  const placeholderStyle =
    theme === "dark"
      ? "placeholder-gray-400 bg-gray-500"
      : "placeholder-gray-600 bg-gray-100";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0z6whj",
        "template_sm7jf7s",
        form.current,
        "J2eoW6q3-Y5wQHrJn"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccess(true);

          setTimeout(() => setSuccess(false), 5000);

          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="text-black mt-10 mx-auto max-w-4xl pt-12 pb-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="my-6 text-2xl">
        Have a project in mind? Let’s talk.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-blue-100 text-black flex flex-col gap-5 p-10 w-full max-w-xl rounded-2xl ring ring-cyan-600"
      >
        <input
          name="from_name"
          className={`${placeholderStyle} p-2 rounded-2xl outline-none`}
          type="text"
          required
          placeholder="Enter Your Name"
        />

        <input
          name="from_email"
          className={`${placeholderStyle} p-2 rounded-2xl outline-none`}
          type="email"
          required
          placeholder="Enter Your Email"
        />

        <textarea
          name="message"
          className={`${placeholderStyle} h-30 p-2 outline-none rounded-xl`}
          required
          placeholder="Enter Your Message..."
        />

        <button
          type="submit"
          className="bg-green-500 py-2 rounded-xl font-bold text-white hover:bg-green-600 cursor-pointer"
        >
          Submit
        </button>

        {success && (
          <p className="text-green-500 text-center font-semibold">
            Your Message Sent Successfully!
          </p>
        )}
      </form>

      <div className="mt-10 flex flex-col items-center">
        <span className="font-semibold text-xl text-red-500">
          Or Email Me Directly:
        </span>

        <a
          href="mailto:contact.rohitshah.dev@gmail.com"
          className="underline"
        >
          contact.rohitshah.dev@gmail.com
        </a>

        <div className="text-4xl flex gap-2 mt-2">
          <a
            href="https://github.com/rohitshah316"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/rohitshah316"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:contact.rohitshah.dev@gmail.com"
            className="hover:text-gray-400"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;