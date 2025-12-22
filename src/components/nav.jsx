import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import BookIll from "../pages/BookIll";
import GraphicIll from "../pages/GraphicIll";
import PaintingIll from "../pages/PaintingIll";
import Contact from "../pages/Contact";
import Props from "../pages/Props";
import OIll from "../pages/OIll";
import E404 from "../pages/E404";

function Nav() {
  const linkClass = "p-3 hover:bg-[#112127] hover:text-[#339999] block";
  const [open, setOpen] = useState(false);
  const PageTitle = ({ title }) => {
    const location = useLocation();

    useEffect(() => {
      document.title = title;
    }, [location, title]);

    return null;
  };

  return (
    <section>
      {/* TOP BAR */}
      <nav className="flex items-center justify-between p-2 bg-[#0a161b] text-white font-bold text-xs md:justify-evenly">
        {/* LOGO / TITLE */}
        <span className="md:hidden text-lg">MENU</span>

        {/* HAMBURGER */}
        <button
          className="md:hidden hover:bg-[#418eb7] bg-[#265467] p-2 rounded-lg text-xl"
          onClick={() => setOpen(!open)}
        >
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
          <NavLink className={linkClass} to="/Graphic_Designs">
            Graphic Desings
          </NavLink>
          <NavLink className={linkClass} to="/Paintings">
            Paintings
          </NavLink>
          <NavLink className={linkClass} to="/Props">
            Prop & Set designs
          </NavLink>
          <NavLink className={linkClass} to="/Contact_me">
            Contact Me
          </NavLink>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed  top-0 left-0 h-full w-56 bg-[#0a161b] text-white transform
        ${open ? "translate-x-0 shadow-2xl shadow-black" : "-translate-x-full "}
        transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button
          className="p-4 text-right w-full hover:cursor-pointer hover:text-[#339999]"
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
          to="/Graphic_Designs"
        >
          Graphic Designs
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className={linkClass}
          to="/Paintings"
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
        <Route
          path="/"
          element={
            <>
              <PageTitle title="DasguptArts- Home" />
              <Home />
            </>
          }
        />
        <Route
          path="/Home"
          element={
            <>
              <PageTitle title="DasguptArts- Home" />
              <Home />
            </>
          }
        />
        <Route
          path="/Book_Illustrations"
          element={
            <>
              <PageTitle title="DasguptArts- Book Illustrations " />
              <BookIll />
            </>
          }
        />
        <Route
          path="/Book_Illustration"
          element={
            <>
              <PageTitle title="DasguptArts- Book Illustrations " />
              <BookIll />
            </>
          }
        />
        <Route
          path="/Other_Illustrations"
          element={
            <>
              <PageTitle title="DasguptArts- Other Illustrations" />
              <OIll />
            </>
          }
        />
        <Route
          path="/Other_Illustration"
          element={
            <>
              <PageTitle title="DasguptArts- Other Illustrations" />
              <OIll />
            </>
          }
        />
        <Route
          path="/Graphic_Designs"
          element={
            <>
              <PageTitle title="DasguptArts- Graphic Designs" />
              <GraphicIll />
            </>
          }
        />
        <Route
          path="/Graphic_Design"
          element={
            <>
              <PageTitle title="DasguptArts- Graphic Designs" />
              <GraphicIll />
            </>
          }
        />
        <Route
          path="/Paintings"
          element={
            <>
              <PageTitle title="DasguptArts- Paintings" />
              <PaintingIll />
            </>
          }
        />
        <Route
          path="/Painting"
          element={
            <>
              <PageTitle title="DasguptArts- Paintings" />
              <PaintingIll />
            </>
          }
        />
        <Route
          path="/Props"
          element={
            <>
              <PageTitle title="DasguptArts- Props & Set design" />
              <Props />
            </>
          }
        />
        <Route
          path="/Prop"
          element={
            <>
              <PageTitle title="DasguptArts- Props & Set design" />
              <Props />
            </>
          }
        />
        <Route
          path="/Contact_me"
          element={
            <>
              <PageTitle title="DasguptArts- Contact Me" />
              <Contact />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <PageTitle title="DasguptArts- Contact Me" />
              <Contact />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageTitle title="DasguptArts-" />
              <E404 />
            </>
          }
        />
      </Routes>
    </section>
  );
}

export default Nav;
