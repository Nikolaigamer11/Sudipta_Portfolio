import React from "react";
import Gallery from "../components/Gallery";
import { character, custom_sketches, Watercolor } from "../components/images";
import IllHeader from "../components/Ill_header";
function OIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader header="Illustrations for other purposes such as character designs, greeting cards, posters, cartoons, web pages, etc." />
      <Gallery
        images={Watercolor}
        txt={`Please click the images to zoom  \n Water color paintings:- `}
      />
      <Gallery images={character} txt="Charector Designs:-" />
      <Gallery images={custom_sketches} txt="Custom Sketches:-" />
    </main>
  );
}

export default OIll;
