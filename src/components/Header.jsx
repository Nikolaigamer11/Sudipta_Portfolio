import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-gray-800 text-white pt-1">
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
        <Link to="/">
          <div className="text-lg md:text-xl font-bold text-center md:text-left">
            DasguptArts
            <h3 className="text-xs  md:flex sm:text-sm md:text-base text-center">
              Sudipta Dasgupta (Steve)
            </h3>
          </div>
        </Link>

        {/* NAME + ICONS */}
        <div
          className="
          md:flex flex-col items-center gap-2
          sm:flex-row sm:gap-3
          md:justify-end
        "
        >
          <div className="flex justify-end gap-3 text-lg   md:text-xl">
            <a
              target="_blank"
              className="hover:text-[#339999]"
              href="mailto:sudiptarts@gmail.com"
            >
              <FaEnvelope />
            </a>
            <a
              target="_blank"
              className="hover:text-[#339999]"
              href="https://www.facebook.com/dasguptarts"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              className="hover:text-[#339999]"
              href="https://www.linkedin.com/in/dasguptarts"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* HEADER IMAGE */}
      <picture className="block w-full rounded-t-lg overflow-hidden">
        <source
          media="(max-width: 350px)"
          srcSet="src\assets\images\banner (Small).jpeg"
        />
        <source
          media="(max-width: 650px)"
          srcSet="src\assets\images\banner (Phone).jpeg"
        />
        <source
          media="(max-width: 1000px)"
          srcSet="src\assets\images\banner.jpeg"
        />
        <img
          src="src\assets\images\banner.jpeg"
          alt="Header Banner"
          className="w-full h-40 sm:h-50 md:h-65 object-cover"
        />
      </picture>
    </header>
  );
}

export default Header;
