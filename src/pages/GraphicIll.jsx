import React from "react";
import Gallery from "../components/Gallery";
import { Graph_ill } from "../components/images";
import IllHeader from "../components/Ill_header";

function GraphicIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader
        p_img="https://picsum.photos/400/300?random=102"
        header="Graphic Design"
        parag="My focus of the study was 'Applied Art', also known as 'Graphic Design'. These artworks were created for hoardings, posters, POS designs, cards, CD covers, book covers, calendars, public relations, magazine ads, show cards, pavilion designs, brochures, flyers, catalogs, storyboards, etc."
      />
      <Gallery images={Graph_ill} />
    </main>
  );
}

export default GraphicIll;
