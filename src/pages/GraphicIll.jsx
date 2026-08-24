import React from "react";
import Gallery from "../components/Gallery";
import { Ads, AirShow, Book, Poster, Storyboard } from "../components/images";
import IllHeader from "../components/Ill_header";

function GraphicIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader
        header="Graphic Design"
        parag="My focus of the study was 'Applied Art', also known as 'Graphic Design'. These artworks were created for hoardings, posters, POS designs, cards, CD covers, book covers, calendars, public relations, magazine ads, show cards, pavilion designs, brochures, flyers, catalogs, storyboards, etc."
      />
      <Gallery
        images={Book}
        txt={`Please click on the images to zoom \nBook Cover Designs:- `}
      />
      <Gallery images={Ads} txt={`Press Ads and Magazine Ads:-`} />
      <Gallery images={Storyboard} txt={`Storyboard Designs:- `} />
      <Gallery images={Poster} txt={`Hoarding & Poster Designs:- `} />
      <Gallery images={AirShow} txt={`Plein Air Show:- `} />
    </main>
  );
}

export default GraphicIll;
