import React from "react";
import Gallery from "../components/Gallery";
import { Traditional, Adult_book, Comic, Digital } from "../components/images";
import IllHeader from "../components/Ill_header";

function BookIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader
        header="Book Illustration"
        parag="My illustrations are used mostly for storybooks. I am comfortable with any style and medium you prefer. I can also suggest you a perfect style based on the storyline. "
      />

      <Gallery
        images={Traditional}
        txt={`Please Click the images to zoom \n Traditional Book Paintings:`}
      />
      <Gallery images={Adult_book} txt={` Book Paintings:`} />
      <Gallery images={Comic} txt={`Comic Book Paintings:`} />
      <Gallery images={Digital} txt={`Digital Book Paintings:`} />
    </main>
  );
}

export default BookIll;
