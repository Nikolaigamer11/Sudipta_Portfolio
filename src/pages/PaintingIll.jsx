import React from "react";
import Gallery from "../components/Gallery";
import { Painting } from "../components/images";

function PaintingIll() {
  return (
    <main>
      <div className="bg-gray-100 min-h-screen py-10">
        <h1 className="text-center text-4xl font-bold mb-10">
          Please Click On a Image to get a Larger View
        </h1>
        <Gallery images={Painting} />
      </div>
    </main>
  );
}

export default PaintingIll;
