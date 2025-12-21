import React from "react";
import {
  FaPhoneSquareAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <main
      className="
        min-h-[calc(100vh-12rem)]
        flex flex-col items-center
        p-4
        md:flex-row md:justify-around md:items-start
      "
    >
      {/* IMAGE */}
      <figure className="flex justify-center">
        <img
          src="https://picsum.photos/200/400"
          alt="Portrait"
          className="w-full aspect-3/4 sm:w-full sm:aspect-3/4 object-cover rounded-lg shadow-md"
        />
      </figure>

      {/* CONTACT DETAILS */}
      <section className="flex flex-col gap-3 text-gray-400 text-sm sm:text-base py-8">
        <p className="flex items-center gap-3 font-semibold text-[#339999] hover:text-[#2f6b4e]">
          <FaPhoneSquareAlt className="text-gray-300 text-lg" />
          <a href="tel:+918420721157">+91 84207 21157</a>
        </p>

        <p className="flex items-center gap-3 font-semibold text-[#339999] hover:text-[#2f6b4e] break-all">
          <FaEnvelope className="text-gray-300 text-lg" />
          <a href="mailto:sudiptarts@gmail.com">sudiptarts@gmail.com</a>
        </p>

        <p className="flex items-center gap-3 font-semibold text-[#339999] hover:text-[#2f6b4e]">
          <FaLinkedin className="text-gray-300 text-lg" />
          <a href="https://www.linkedin.com/in/dasguptarts">dasguptarts</a>
        </p>

        <p className="flex items-center gap-3 font-semibold text-[#339999] hover:text-[#2f6b4e]">
          <FaFacebookSquare className="text-gray-300 text-lg" />
          <a href="https://www.facebook.com/dasguptarts">dasguptarts</a>
        </p>

        <p className="flex items-center gap-3 font-semibold text-[#339999] hover:text-[#2f6b4e]">
          <FaSquareXTwitter className="text-gray-300 text-lg" />
          <a href="https://twitter.com/dasguptarts">@dasguptarts</a>
        </p>

        <p className="flex items-center gap-3 font-semibold text-[#339999] hover:text-[#2f6b4e]">
          <FaInstagramSquare className="text-gray-300 text-lg" />
          <a href="https://www.instagram.com/dasguptarts/">dasguptarts</a>
        </p>
      </section>
    </main>
  );
}

export default Contact;
