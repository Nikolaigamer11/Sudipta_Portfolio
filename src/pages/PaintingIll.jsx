import React from "react";
import IllHeader from "../components/Ill_header";
import Gallery from "../components/Gallery";
import { Painting } from "../components/images";

function PaintingIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader
        header="My Paintings"
        p_img="https://picsum.photos/400/300?random=102"
        parag={`Painting is more like a hobby to me, unless it is custom work. \n
Acrylic, oil, watercolor and mixed media as well as I often used real elements such as glass, fiber, foam, plastic, metal chains, coins, packing board and many more to give it a special look.\n

I also enjoy mural/wall art. So far I have painted murals in Chicago, IL , Alliance, OH and Brooklyn, NY.`}
      />
      <Gallery images={Painting} />
    </main>
  );
}

export default PaintingIll;
