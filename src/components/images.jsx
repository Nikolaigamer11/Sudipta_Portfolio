function createImageArray({ count, basePath, extension = "jpg", link }) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    thumbnail: `${basePath}/${i + 1}.${extension}`,
    fullRes: `${basePath}/${i + 1}.${extension}`,
    link: `/${link}`,
  }));
}

const TRADITIONAL_PAINTINGS = 24;
const ADULT_PAINTINGS = 5;
const COMIC_PAINTINGS = 20;
const DIGITAL_PAINTINGS = 25;
const CHARACTER_PAINTINGS = 15;
const PENCIL = 25;
const MANUAL_REAL = 4;
const VECTORS = 11;
const ANIMATION_BACK = 5;
const MANUAL = 31;
const MISCELLANEOUS = 10;
const WATER_PAINTINGS = 11;
const SET_NUM = 11;
const BOOK = 20;
const POSTER = 6;
const MURAL = 15;
const PORTION = 20;
const CANVAS = 12;
const SKETCH = 5;
const AIRSHOW = 4;
const ADS = 3;
const STORYBOARD = 10;
// ------ Book illustrations -------

const Traditional = createImageArray({
  count: TRADITIONAL_PAINTINGS,
  basePath: "/Book Illustrations/1_TraditionalManual",
  link: "Book_Illustrations",
});

const Digital = createImageArray({
  count: DIGITAL_PAINTINGS,
  basePath: "/Book Illustrations/2_Digital",

  link: "Book_Illustrations",
});
const Comic = createImageArray({
  count: COMIC_PAINTINGS,
  basePath: "/Book Illustrations/3_Comic",

  link: "Book_Illustrations",
});
const Adult_book = createImageArray({
  count: ADULT_PAINTINGS,
  basePath: "/Book Illustrations/4_Adult Books",

  link: "Book_Illustrations",
});

// ----- Other illustrations ------

const Watercolor = createImageArray({
  count: WATER_PAINTINGS,
  basePath: "/Other Illustrations/1_Watercolor Illustrations",
  link: "Other_Illustrations",
});

const Pencil = createImageArray({
  count: PENCIL,
  basePath: "/Other Illustrations/2_Pencil and Ink",
  link: "Other_Illustrations",
});

const Manual_Real = createImageArray({
  count: MANUAL_REAL,
  basePath: "/Other Illustrations/3_Manual Illustration of Real Places",
  link: "Other_Illustrations",
});

const character = createImageArray({
  count: CHARACTER_PAINTINGS,
  basePath: "/Other Illustrations/4_Character illustrations",
  link: "Other_Illustrations",
});
const vector = createImageArray({
  count: VECTORS,
  basePath: "/Other Illustrations/5_Vector Graphics",
  link: "Other Illustrations",
});

const Animation_Back = createImageArray({
  count: ANIMATION_BACK,
  basePath: "/Other Illustrations/6_Background for Animations",
  link: "Other Illustrations",
});

const Manual = createImageArray({
  count: MANUAL,
  basePath: "/Other Illustrations/7_Manual Illustrations",
  link: "Other Illustrations",
});

const Miscellaneous = createImageArray({
  count: MISCELLANEOUS,
  basePath: "/Other Illustrations/8_Miscellaneous",
  link: "Other Illustrations",
});
// ------- Paintings -------

const Mural = createImageArray({
  count: MURAL,
  basePath: "/Paintings/Mural",
  link: "Painting",
});

const Portion = createImageArray({
  count: PORTION,
  basePath: "/Paintings/Portions of Murals",
  link: "Painting",
});

const Canvas = createImageArray({
  count: CANVAS,
  basePath: "/Paintings/OilAcrylic on Canvas",
  link: "Painting",
});

const Sketch = createImageArray({
  count: SKETCH,
  basePath: "/Paintings/Sketch",
  link: "Painting",
});

const Sets = createImageArray({
  count: SET_NUM,
  basePath: "/Sets",
  prefix: "Set Designs",
  link: "Props",
});

const Book = createImageArray({
  count: BOOK,
  basePath: "/Graphic Designs/Book Cover",
  link: "Graphic_Designs",
});
const Poster = createImageArray({
  count: POSTER,
  basePath: "/Graphic Designs/Hoarding and Poster",
  link: "Graphic_Designs",
});

const AirShow = createImageArray({
  count: AIRSHOW,
  basePath: "/Graphic Designs/Air Show",
  link: "Graphic_Designs",
});

const Ads = createImageArray({
  count: ADS,
  basePath: "/Graphic Designs/Ads",
  link: "Graphic_Designs",
});

const Storyboard = createImageArray({
  count: STORYBOARD,
  basePath: "/Graphic Designs/Storyboard",
  link: "Graphic_Designs",
});

export {
  Sets,
  Book,
  Poster,
  Traditional,
  Digital,
  Watercolor,
  Pencil,
  character,
  Manual_Real,
  vector,
  Animation_Back,
  Manual,
  Miscellaneous,
  Comic,
  Adult_book,
  Mural,
  Portion,
  Canvas,
  Sketch,
  AirShow,
  Ads,
  Storyboard,
};
