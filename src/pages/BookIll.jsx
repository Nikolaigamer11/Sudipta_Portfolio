import React from "react";
import Gallery from "../components/Gallery";
import { Book_ill } from "../components/images";
function BookIll() {
  return (
    <main>
      <div className="bg-gray-100 min-h-screen py-10">
        <h1 className="text-center text-4xl font-bold mb-10">
          Please Click On a Image to get a Larger View
        </h1>
        <Gallery images={Book_ill} />
      </div>
    </main>
  );
}

export default BookIll;
