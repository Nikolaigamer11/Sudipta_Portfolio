import React from "react";
import {
  Traditional,
  Watercolor,
  Graphics,
  Paintings,
  Sets,
} from "../components/images";
import { NavLink } from "react-router-dom";

const ImageHoverCard = ({ image, to, title }) => {
  return (
    <NavLink
      to={to}
      className="group relative block h-0 pb-[75%] overflow-hidden rounded-xl"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-white text-lg font-semibold">See more</span>
      </div>
    </NavLink>
  );
};

function Home() {
  return (
    <main className="w-full mt-2 pt-8 pb-20 bg-gray-700">
      <section className="flex flex-col items-center px-4 md:flex-row mb-8">
        <figure className="mx-4 my-2 flex-none">
          <img src="images\self_potriat.jpg" alt="self portait" />
        </figure>
        <section className="text-left my-auto text-[#339999]">
          <h3 className=" text-[#5f92b2] font-bold text-2xl">
            <q className="italic text-gray-300 ">
              Art is a lie that makes us realize truth
            </q>
            -Pablo Picasso
          </h3>
          <p className="indent-2">
            It is a quote that defines all artworks and mine is no exception. My
            name is Sudipta Dasgupta, AKA Steve, in the arena of artworks - born
            to do illustration alongside my passion for painting. I am but a
            fiddler with pencil, color and brush before those maestros. My sole
            reward is that my figments are still like the stars, which are given
            space out in a firmament of the creative genius. Art symbolizes
            humanity, emotion or politics; art outreaches spirituality and art
            breathes of God's grace; artwork is an effort to give shape to all
            dreams and to merge into the flow of sheer shapelessness and
            nonconformity.
          </p>
        </section>
      </section>
      <section className=" px-4">
        <h3 className="text-3xl text-gray-200 text-center underline underline-offset-1">
          Works
        </h3>
        {/* --------------------------- */}
        <div className="flex flex-col gap-2">
          <h5 className="text-xl text-gray-200 underline underline-offset-1">
            Book Illustrations :-{" "}
          </h5>

          <div className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-6 overflow-x-auto no-scrollbar">
            {/* DESKTOP VIEW: Show only first 2 */}
            {Traditional.slice(0, 3).map((item) => (
              <div key={`desktop-${item.id}`} className="hidden md:block">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE VIEW: Show first 4 + See More Card */}
            {Traditional.slice(0, 6).map((item) => (
              <div key={`mobile-${item.id}`} className="block md:hidden">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE ONLY "SEE MORE" CARD */}
            <NavLink
              to="/Book_Illustrations"
              className="md:hidden flex items-center justify-center min-w-65 aspect-4/3 bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-600 hover:border-gray-400 transition-colors"
            >
              <span className="text-gray-300 font-medium">
                See all illustrations →
              </span>
            </NavLink>
          </div>
        </div>
        {/* -------------------------------------*/}

        <div className="flex flex-col gap-2">
          <h5 className="text-xl text-gray-200 underline underline-offset-1">
            Other Illustrations :-{" "}
          </h5>

          <div className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-6 overflow-x-auto no-scrollbar">
            {/* DESKTOP VIEW: Show only first 2 */}
            {Watercolor.slice(0, 3).map((item) => (
              <div key={`desktop-${item.id}`} className="hidden md:block">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE VIEW: Show first 4 + See More Card */}
            {Watercolor.slice(0, 6).map((item) => (
              <div key={`mobile-${item.id}`} className="block md:hidden">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE ONLY "SEE MORE" CARD */}
            <NavLink
              to="/Other_Illustrations"
              className="md:hidden flex items-center justify-center min-w-65 aspect-4/3 bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-600 hover:border-gray-400 transition-colors"
            >
              <span className="text-gray-300 font-medium">
                See all illustrations →
              </span>
            </NavLink>
          </div>
        </div>

        {/* ------------------------------------ */}
        <div className="flex flex-col gap-2">
          <h5 className="text-xl text-gray-200 underline underline-offset-1">
            Graphic Designs:-{" "}
          </h5>

          <div className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-6 overflow-x-auto no-scrollbar">
            {/* DESKTOP VIEW: Show only first 2 */}
            {Graphics.slice(0, 3).map((item) => (
              <div key={`desktop-${item.id}`} className="hidden md:block">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE VIEW: Show first 4 + See More Card */}
            {Graphics.slice(0, 6).map((item) => (
              <div key={`mobile-${item.id}`} className="block md:hidden">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE ONLY "SEE MORE" CARD */}
            <NavLink
              to="/Graphic_Illustrations"
              className="md:hidden flex items-center justify-center min-w-65 aspect-4/3 bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-600 hover:border-gray-400 transition-colors"
            >
              <span className="text-gray-300 font-medium">
                See all illustrations →
              </span>
            </NavLink>
          </div>
        </div>
        {/* ---------------------------------------------------------------------- */}

        <div className="flex flex-col gap-2">
          <h5 className="text-xl text-gray-200 underline underline-offset-1">
            Paintings :-
          </h5>

          <div className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-6 overflow-x-auto no-scrollbar">
            {/* DESKTOP VIEW: Show only first 2 */}
            {Paintings.slice(0, 3).map((item) => (
              <div key={`desktop-${item.id}`} className="hidden md:block">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE VIEW: Show first 4 + See More Card */}
            {Paintings.slice(0, 6).map((item) => (
              <div key={`mobile-${item.id}`} className="block md:hidden">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE ONLY "SEE MORE" CARD */}
            <NavLink
              to="/Sets"
              className="md:hidden flex items-center justify-center min-w-65 aspect-4/3 bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-600 hover:border-gray-400 transition-colors"
            >
              <span className="text-gray-300 font-medium">
                See all illustrations →
              </span>
            </NavLink>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}

        <div className="flex flex-col gap-2">
          <h5 className="text-xl text-gray-200 underline underline-offset-1">
            Prop & Set Desings :-
          </h5>

          <div className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-6 overflow-x-auto no-scrollbar">
            {/* DESKTOP VIEW: Show only first 2 */}
            {Sets.slice(0, 3).map((item) => (
              <div key={`desktop-${item.id}`} className="hidden md:block">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE VIEW: Show first 4 + See More Card */}
            {Sets.slice(0, 6).map((item) => (
              <div key={`mobile-${item.id}`} className="block md:hidden">
                <ImageHoverCard
                  image={item.thumbnail}
                  alt={item.title}
                  to={item.link}
                />
              </div>
            ))}

            {/* MOBILE ONLY "SEE MORE" CARD */}
            <NavLink
              to="/Props"
              className="md:hidden flex items-center justify-center min-w-65 aspect-4/3 bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-600 hover:border-gray-400 transition-colors"
            >
              <span className="text-gray-300 font-medium">
                See all illustrations →
              </span>
            </NavLink>
          </div>
        </div>

        {/* --------------------------------------------------------------------------- */}
      </section>

      <section className="p-5 text-gray-200">
        <h3 className="text-3xl text-center underline underline-offset-1">
          Work Experience
        </h3>
        <div className="  text-left my-5">
          <h5 className="text-[#5dcae9]">Educational Qualification :</h5>
          <p>
            Passed B.V.A. (Bachelor of Visual Arts), from Govt. College of Art
            &Craft.(University of Calcutta) Kolkata, India, with 1st Class
            marks.
          </p>
        </div>

        <div className=" text-left my-5">
          <h5 className="text-[#5dcae9]">Working Field:</h5>
          <p>
            Illustration (any style and any medium), Painting (water color,
            oil,acrylic, mixed media etc), Graphic Design.
          </p>
        </div>
        <div className=" text-left my-5">
          <h5 className="text-[#5dcae9]">Experience:</h5>
          <p>
            Extensive experience creating artwork in a variety of styles and
            mediums for more than a hundred and seventy five companies and
            individuals worldwide. Artwork created for storybooks and other
            books, book covers, cartoons, caricatures, character design, image
            editing, comic strips, advertising elements, storyboards, posters,
            hoardings, web pages, danglers, POS designs, T-Shirt, magazine ads,
            press ads, show cards, greeting cards, games, mobile apps,
            calendars, logo design, pavilion designs etc Painting is all
            mediums. Digital work (Adobe Photoshop, Adobe Illustrator, Adobe
            InDesign)
          </p>
        </div>
        <div className=" text-left my-5">
          <h5 className="text-[#5dcae9]">Client List:</h5>
          <p>
            Google (Benelux), Artistic Gallery of Brooklyn (US), Piton Books
            (Canada), Gillie & Marc Pty Ltd. (Australia), Zox (US), Editions
            Photoguy (France), Clever Mind Series (Australia), Ground Tech Corp
            (US), Studio WAS (Finland), Jamie Group (US), Zerbosch (Germany),
            Gambet (Greece), Hero Fiction (US), Glenmeadow Shires (New Zeeland),
            ACB Trophy (US), Dr. Tom Ferraro (US), Glenfiddch (Netherlands),
            Parisa Business Consulting (US), DJ INC (Australia), Pet Design
            (US), Sortiment AS (Norway), Rough Writer, INC. (US), Brynn Sugarman
            (Israel), Colossal Adventure, F. Gillette (US), First Base Media
            (US), Impact & Echo (Kuwait), SOS medical (US), Aura Creative (UAE),
            Money Design LLC (US), Lycia K's cards (UK), Discovery Academy
            (Canada), Nola Soft (US), Karaoki Entertainment (Austria), Anat
            Umansky (Israel), Kid Emperor (US), Leviathan Production (US),
            Hometown520Press (US and Spain), New Foundation Press (US), Tate
            Publishing (US), Decorband (Australia), Web Page Testers (Brazil),
            Calcoast Country (US), Meditas promotion firm (Istanbul),
            Illustration Solution (US), Jersey Shore Cosmetics (US), H.Arm
            (Holland), Tootle (Sweden), Bear Manor Media (Japan), Special
            Learning LLC (US), Kyokushin karate Association (Australia),
            Multilingual Group (US), AusDollar (Australia), Develop 4 Media Ltd
            (UK), Marketplace (US), Glasvezel (Holland), Net Kinetics (US &
            Philippines), Marcos Crespo (US), World Reach (US), Nati Dobkin
            (Israel), Conquest Media Group (US), Sky Lanterns (China, Canada),
            Lori Entertainment (Israel), Kobirech (Israel), Cracknup
            Entertainment (US), P & D Investments (US), Text Sourcing (India),
            SikhNet (US), Indian Hipi (India), Spechlis (US), ESL Games (Hong
            Kong), Al Pistole (US), Billimoria & Lalgi (India), Kryptonite
            Kollectibles Inc (US), Rosita Bird (UK), Roods (Netherlands), Zandig
            Knowledge Management (India), Wj7Ster (Australia), Relentlessly
            Inaccurate LLC (US), Expecting Fitness (US), Now Screen Pty LTD
            (Australia), MJD Books Publishing (US), 1 Stop Elite Solution
            (Singapore), Troll Hole Museum (US), Kelvin & Claire (Singapore),
            Sea Island Fans (US), Betty Lukens Inc (US), Velocity Publishing
            Group Inc. (US), Graphics Hunter (US), Cruea Creations (Canada),
            Volleyball England (UK), Walt Smith International (Fiji), Moore
            Zombie (US), Maryland Secretarial Services, Inc (US), My Childs
            Prayers (US), Krzysztof Miszczak (US),Blossom Spring Publishing
            (UK),Vanessa Santiago-Jerman (US), Digimage Inc (Canada), Golden Box
            Books Publishing (US), Sybrina Publishing(US), FoundationsBooks.net
            (US), Clear Fork Publishing (US), Sticky's Adventures (US), K&E
            Enterprises (US), Books by Niya (US), Mascot Books (US), Steve
            Callahan (US), Christy Meyoli (US), Connection to Creativity (US),
            Adventures of Aiden, LLC. (US), Steve Challahan (US), Lawrence
            Sturdivant Jr. (US), Kirk Uejio (US), HeartString Productions, LLC.
            (US), Krayzehouse Development Corporation (US), Viviane Moors
            (Germany) Alve Kvåle (Norway), Heartstring Productions (US), Sarah
            Butterworth/fremantle (UK), Pawflex (US), Jim Skiba (US), The Madden
            Corporation (US)….. and many more.
          </p>
        </div>
        <div className=" text-left my-5">
          <h5 className="text-[#5dcae9]">Participation: </h5>
          <ol className=" text-left list-decimal list-inside">
            <li>
              2001 - 2006 Annual Exhibition of Govt. College of Art & Craft
              (Kolkata, India) Certificate of Merit and Gopal Ghosh Memorial
              Scholarship.
            </li>
            <li>2005 Camlin Art Exhibition (Kolkata). </li>
            <li>
              2005 International Art competition by Zee Bangla(India). 1st
              position
            </li>
            <li>2005 Indian Artists: Past, Present and Future (Kokata). </li>
            <li>2005 Workshop with present famous Indian Illustrators. </li>
            <li>
              2005 - 2006 Annual All India Fine Art Exhibition, Academy of Fine
              Arts.
            </li>
            <li>2006 Avantika Art Exhibition (Kolkata). Gold Medal. </li>
            <li>2006 Agnipath Art Exhibition. (Delhi). Silver Medal. </li>
            <li>2007 Akon Bakon art contest (Howrah). Gold Medal. </li>
            <li>2008 “Embracing Our Differences” (Florida, USA) </li>
            <li>2009 Group Show at Birla Art Academy (Kolkata, India).</li>
            <li>
              2016 Workshop at “The Highlights Foundation” (Pennsylvania, USA).
            </li>
            <li>
              2017 Workshop at “The Highlights Foundation” with Scholarship.
              (Pennsylvania, USA).
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Home;
