import React from "react";
import Gallery from "../components/Gallery";
import IllHeader from "../components/Ill_header";
import { Sets } from "../components/images";
function Props() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader header="Set Designs for Theater and Film" />
      <Gallery
        txt={`Please click on the images to zoom \nProp designs and set designs:- `}
        images={Sets}
      />
    </main>
  );
}

export default Props;
