import React from "react";
import Gallery from "../components/Gallery";
import {
  character,
  Pencil,
  Watercolor,
  Manual_Real,
  vector,
  Manual,
  Animation_Back,
  Miscellaneous,
} from "../components/images";
import IllHeader from "../components/Ill_header";
function OIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader header="Illustrations for other purposes such as character designs, greeting cards, posters, cartoons, web pages, etc." />
      <Gallery
        images={Watercolor}
        txt={`Please click the images to zoom  \n Watercolor illustrations:- `}
      />
      <Gallery images={Pencil} txt="Pencil Sketches (Digital and Manual) :-" />
      <Gallery
        images={Manual_Real}
        txt="Manual Illustration of Real Places :-"
      />
      <Gallery images={character} txt="Charector Designs:-" />
      <Gallery images={vector} txt="Vector Graphics (Adobe Illustrator) :-" />
      <Gallery images={Animation_Back} txt="Background for Animations :-" />
      <Gallery images={Manual} txt="Manual Illustrations:-" />

      <Gallery images={Miscellaneous} />
    </main>
  );
}

export default OIll;
