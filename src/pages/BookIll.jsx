import React from "react";
import Gallery from "../components/Gallery";
import { Book_ill } from "../components/images";
import IllHeader from "../components/Ill_header";
function BookIll() {
  return (
    <main className=" min-h-screen py-10">
      <IllHeader
        p_img="https://picsum.photos/400/300?random=102"
        header="Book Illustration"
        parag="My illustrations are used mostly for storybooks. I am comfortable with any style and medium you prefer. I can also suggest you a perfect style based on the storyline. "
      />
      <Gallery images={Book_ill} />
    </main>
  );
}

export default BookIll;
