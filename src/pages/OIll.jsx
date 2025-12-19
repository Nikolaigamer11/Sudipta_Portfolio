import React from "react";
import Gallery from "../components/Gallery";
import { Other_ill } from "../components/images";
import IllHeader from "../components/Ill_header";
function OIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader
        p_img="https://picsum.photos/400/300?random=102"
        header="Illustrations for other purposes such as character designs, greeting cards, posters, cartoons, web pages, etc."
      />
      <Gallery images={Other_ill} />
    </main>
  );
}

export default OIll;
