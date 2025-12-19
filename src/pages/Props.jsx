import React from "react";
import Gallery from "../components/Gallery";
import IllHeader from "../components/Ill_header";
import { Sets } from "../components/images";
function Props() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader header="Set Designs for Theater and Film" />
      <Gallery images={Sets} />
    </main>
  );
}

export default Props;
