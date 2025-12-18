import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import BookIll from "../pages/BookIll";
import GraphicIll from "../pages/GraphicIll";
import PaintingIll from "../pages/PaintingIll";
import Contact from "../pages/Contact";
import Props from "../pages/Props";
import OIll from "../pages/OIll";
import E404 from "../pages/E404";

function Nav() {
  const [open, setOpen] = useState(false);

  const linkClass = "p-3 hover:bg-[#112127] hover:text-[#339999] block";

  return (
    <section>
      {/* TOP BAR */}
      <nav className="flex items-center justify-between p-2 bg-[#0a161b] text-white font-bold text-xs md:justify-evenly">
        {/* LOGO / TITLE */}
        <span className="md:hidden text-lg">MENU</span>

        {/* HAMBURGER */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex justify-evenly w-full">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/Book_Illustrations">
            Book Illustrations
          </NavLink>
          <NavLink className={linkClass} to="/Other_Illustrations">
            Other Illustrations
          </NavLink>
          <NavLink className={linkClass} to="/Graphic_Illustrations">
            Graphic Illustrations
          </NavLink>
          <NavLink className={linkClass} to="/Painting">
            Painting
          </NavLink>
          <NavLink className={linkClass} to="/Props">
            Props
          </NavLink>
          <NavLink className={linkClass} to="/Contact_me">
            Contact Me
          </NavLink>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-[#0a161b] text-white transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button
          className="p-4 text-right w-full"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <NavLink onClick={() => setOpen(false)} className={linkClass} to="/">
          Home
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className={linkClass}
          to="/Book_Illustrations"
        >
          Book Illustrations
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className={linkClass}
          to="/Other_Illustrations"
        >
          Other Illustrations
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className={linkClass}
          to="/Graphic_Illustrations"
        >
          Graphic Illustrations
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className={linkClass}
          to="/Painting"
        >
          Painting
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className={linkClass}
          to="/Props"
        >
          Props
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className={linkClass}
          to="/Contact_me"
        >
          Contact Me
        </NavLink>
      </div>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Book_Illustrations" element={<BookIll />} />
        <Route path="/Other_Illustrations" element={<OIll />} />
        <Route path="/Graphic_Illustrations" element={<GraphicIll />} />
        <Route path="/Painting" element={<PaintingIll />} />
        <Route path="/Props" element={<Props />} />
        <Route path="/Contact_me" element={<Contact />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </section>
  );
}

export default Nav;
