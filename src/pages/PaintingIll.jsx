import React from "react";
import IllHeader from "../components/Ill_header";
import Gallery from "../components/Gallery";
import { Mural, Portion, Canvas, Sketch } from "../components/images";

function PaintingIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader
        header="My Paintings"
        parag={`Painting is more like a hobby to me, unless it is custom work. \n
Acrylic, oil, watercolor and mixed media as well as I often used real elements such as glass, fiber, foam, plastic, metal chains, coins, packing board and many more to give it a special look.\n

I also enjoy mural/wall art. So far I have painted murals in Chicago, IL , Alliance, OH and Brooklyn, NY.`}
      />
      <Gallery
        images={Mural}
        txt={`Please click on  the images to zoom\n Murals:-`}
      />
      <Gallery images={Portion} txt={`Portions of Murals:-`} />
      <Gallery images={Canvas} txt={`OilAcrylic on Canvas:-`} />
      <Gallery images={Sketch} txt={`Sketches:-`} />
    </main>
  );
}

export default PaintingIll;
