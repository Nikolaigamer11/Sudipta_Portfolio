import React from "react";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-gray-800 text-white pt-3">
      {/* TOP BAR */}
      <div
        className="
        container mx-auto my-2
        flex flex-col gap-2
        md:flex-row md:justify-between md:items-center
        px-4
      "
      >
        {/* LOGO */}
        <div className="text-lg md:text-xl font-bold text-center md:text-left">
          DasguptArts
        </div>

        {/* NAME + ICONS */}
        <div
          className="
          md:flex hidden flex-col items-center gap-2
          sm:flex-row sm:gap-3
          md:justify-end
        "
        >
          <h3 className="text-xs sm:text-sm md:text-base text-center">
            Sudipta Dasgupta (Steve)
          </h3>

          <div className="flex gap-3 text-lg   md:text-xl">
            <a className="hover:text-gray-300" href="#">
              <FaEnvelope />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaFacebook />
            </a>
            <a className="hover:text-gray-300" href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* HEADER IMAGE */}
      <picture className="block w-full rounded-t-lg overflow-hidden">
        <source
          media="(max-width: 350px)"
          srcSet="https://placehold.co/350x160"
        />
        <source
          media="(max-width: 650px)"
          srcSet="https://placehold.co/650x180"
        />
        <source
          media="(max-width: 1000px)"
          srcSet="https://placehold.co/1080x220"
        />
        <img
          src="https://placehold.co/1200x400"
          alt="Header Banner"
          className="w-full h-40 sm:h-50 md:h-65 object-cover"
        />
      </picture>
    </header>
  );
}

export default Header;
