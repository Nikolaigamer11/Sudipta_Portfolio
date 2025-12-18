import React, { useState, useEffect } from "react";

const Gallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="p-2 sm:p-4 max-w-7xl mx-auto mt-2">
      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 sm:gap-4">
        {images.map((img, index) => (
          <div key={img.id || index} className="break-inside-avoid">
            <img
              src={img.thumbnail}
              alt={img.title}
              loading="lazy"
              onClick={() => openModal(index)}
              className="w-full mb-3 sm:mb-4 cursor-pointer transition-transform duration-150 hover:scale-[1.02] shadow-md hover:shadow-xl rounded"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-2 sm:px-4"
          onClick={closeModal}
        >
          {/* CLOSE BUTTON */}
          <button
            className="fixed top-4 right-4 sm:top-6 sm:right-6 text-white text-4xl sm:text-5xl font-thin z-50 hover:text-gray-400"
            onClick={closeModal}
          >
            &times;
          </button>

          <div
            className="relative w-full max-w-5xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={images[currentIndex].fullRes}
                alt={images[currentIndex].title}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain select-none"
              />

              {/* DESKTOP CLICK ZONES */}
              <div className="absolute inset-0 hidden md:flex">
                <div className="w-1/2 cursor-pointer" onClick={prevSlide} />
                <div className="w-1/2 cursor-pointer" onClick={nextSlide} />
              </div>
            </div>

            {/* MOBILE CONTROLS */}
            <div className="flex justify-between w-full mt-4 md:hidden">
              <button
                onClick={prevSlide}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                ‹ Prev
              </button>
              <button
                onClick={nextSlide}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                Next ›
              </button>
            </div>

            {/* CAPTION */}
            <div className="mt-4 sm:mt-6 text-center text-white px-2">
              <h3 className="text-base sm:text-xl font-semibold tracking-wide">
                {images[currentIndex].title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Image {currentIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
