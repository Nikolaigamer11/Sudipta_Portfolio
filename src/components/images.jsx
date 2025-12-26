function createImageArray({
  count,
  basePath,
  prefix,
  extension = "jpg",
  link,
}) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    thumbnail: `${basePath}/${prefix}_${i + 1}.${extension}`,
    fullRes: `${basePath}/${prefix}_${i + 1}.${extension}`,
    link: `/${link}`,
    title: `${prefix} ${i + 1}`,
  }));
}

const TRADITIONAL_PAINTINGS = 24;
const ADULT_PAINTINGS = 5;
const COMIC_PAINTINGS = 20;
const DIGITAL_PAINTINGS = 25;
const CHARACTER_PAINTINGS = 17;
const CUSTOM_PAINTINGS = 37;
const WATER_PAINTINGS = 11;
const PAINTING_NUM = 115;
const SET_NUM = 13;
const GRAPHIC_D = 92;

const Traditional = createImageArray({
  count: TRADITIONAL_PAINTINGS,
  basePath: "dist/assets/Book Illustrations/TraditionalManual",
  prefix: "Traditional",
  link: "Book_Illustrations",
});
const Adult_book = createImageArray({
  count: ADULT_PAINTINGS,
  basePath: "dist/assets/Book Illustrations/Adult_Books",
  prefix: "Adult Books",
  link: "Book_Illustrations",
});
const Comic = createImageArray({
  count: COMIC_PAINTINGS,
  basePath: "dist/assets/Book Illustrations/Comic",
  prefix: "Comic",
  link: "Book_Illustrations",
});
const Digital = createImageArray({
  count: DIGITAL_PAINTINGS,
  basePath: "dist/assets/Book Illustrations/Digital",
  prefix: "digital",
  link: "Book_Illustrations",
});

const character = createImageArray({
  count: CHARACTER_PAINTINGS,
  basePath: "dist/assets/Other Illustrations/character illustrations",
  prefix: "Charectors",
  link: "Other_Illustrations",
});

const custom_sketches = createImageArray({
  count: CUSTOM_PAINTINGS,
  basePath: "dist/assets/Other Illustrations/Custom sketches",
  prefix: "Sketches",
  link: "Other_Illustrations",
});

const Watercolor = createImageArray({
  count: WATER_PAINTINGS,
  basePath: "dist/assets/Other Illustrations/Watercolor Illustrations",
  prefix: "WaterColors",
  link: "Other_Illustrations",
});

const Paintings = createImageArray({
  count: PAINTING_NUM,
  basePath: "dist/assets/Paintings",
  prefix: "Painting",
  link: "Painting",
});

const Sets = createImageArray({
  count: SET_NUM,
  basePath: "dist/assets/Sets",
  prefix: "Set Designs",
  link: "Painting",
});

const Graphics = createImageArray({
  count: GRAPHIC_D,
  basePath: "dist/assets/Graphic Designs",
  prefix: "Graphic Designs",
  link: "Graphic_Designs",
});

export {
  Sets,
  Graphics,
  Paintings,
  Traditional,
  Digital,
  Watercolor,
  custom_sketches,
  character,
  Comic,
  Adult_book,
};
