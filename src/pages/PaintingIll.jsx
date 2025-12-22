import React from "react";
import IllHeader from "../components/Ill_header";
import Gallery from "../components/Gallery";
// 1. Import the new hook (ensure the path is correct)
import { useDriveGallery } from "../components/useDriveGallery";

function PaintingIll() {
  // 2. Initialize the hook with your folder name from Google Drive
  const { data, loading, error } = useDriveGallery("painting");

  return (
    <main className="min-h-screen py-10 bg-zinc-900">
      <IllHeader
        header="My Paintings"
        p_img="https://picsum.photos/400/300?random=102"
        parag={`Painting is more like a hobby to me, unless it is custom work. \n
Acrylic, oil, watercolor and mixed media as well as I often used real elements such as glass, fiber, foam, plastic, metal chains, coins, packing board and many more to give it a special look.\n
I also enjoy mural/wall art. So far I have painted murals in Chicago, IL , Alliance, OH and Brooklyn, NY.`}
      />

      {/* 3. Handle Loading State */}
      {loading && (
        <div className="text-center text-gray-400 py-20 animate-pulse">
          Fetching paintings from Google Drive...
        </div>
      )}

      {/* 4. Handle Error State */}
      {error && (
        <div className="text-center text-red-400 py-20">
          Error loading gallery: {error}
        </div>
      )}

      {/* 5. Render the dynamic images */}
      {!loading && data.length > 0 && <Gallery images={data[0].images} />}
    </main>
  );
}

export default PaintingIll;
