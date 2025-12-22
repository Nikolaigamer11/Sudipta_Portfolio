import { useState, useEffect, useCallback } from "react";

<<<<<<< HEAD
const drive = "AIzaSyAALRgwr9ULa7zxWY64Ocmcho1ttGyZzrs";
const folder_name = "13av491siGqdy5QSU6oIkPudkJ_zt5zZw";
=======
const API_KEY = API_KEY;
const PARENT_FOLDER_ID = FOLDER_ID;
>>>>>>> a0320e667a99e8e1213b21ef8625bc00cdb778ec

export const useDriveGallery = (folderName = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDriveData = useCallback(
    async (forceRefresh = false) => {
      setLoading(true);
      const cacheKey = `drive_cache_${folderName || "all"}`;

      // 1. Check Cache
      if (!forceRefresh) {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          setData(JSON.parse(cached));
          setLoading(false);
          return;
        }
      }

      try {
        // 2. Fetch Subfolders from Parent
<<<<<<< HEAD
        const folderQuery = `'${folder_name}' in parents and mimeType = 'application/vnd.google-apps.folder'`;
        const folderRes = await fetch(
          `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
            folderQuery
          )}&key=${drive}`
=======
        const folderQuery = `'${PARENT_FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.folder'`;
        const folderRes = await fetch(
          `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
            folderQuery
          )}&key=${API_KEY}`
>>>>>>> a0320e667a99e8e1213b21ef8625bc00cdb778ec
        );
        const folderData = await folderRes.json();

        const targetFolders = folderName
          ? folderData.files.filter(
              (f) => f.name.toLowerCase() === folderName.toLowerCase()
            )
          : folderData.files;

        // 3. Fetch Images for each folder
        const result = await Promise.all(
          targetFolders.map(async (folder) => {
            // Added 'thumbnailLink' to the fields parameter below
            const imgQuery = `'${folder.id}' in parents and mimeType contains 'image/'`;
            const imgRes = await fetch(
              `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
                imgQuery
<<<<<<< HEAD
              )}&fields=files(id,name,thumbnailLink)&key=${drive}`
=======
              )}&fields=files(id,name,thumbnailLink)&key=${API_KEY}`
>>>>>>> a0320e667a99e8e1213b21ef8625bc00cdb778ec
            );
            const imgData = await imgRes.json();

            return {
              category: folder.name,
              images: imgData.files.map((file) => {
                // Google Drive thumbnails end in =s220 by default.
                // We replace that with a larger number (e.g., =s1000) for better quality.
                const highResThumb = file.thumbnailLink
                  ? file.thumbnailLink.replace(/=s\d+$/, "=s1000")
                  : "";

                return {
                  id: file.id,
                  title: file.name.split(".")[0],
                  thumbnail: highResThumb,
                  // If thumbnail fails, this is the direct link (may still have CORS issues)
                  fullRes: `https://lh3.googleusercontent.com/u/0/d/${file.id}`,
                };
              }),
            };
          })
        );

        // 4. Save to Cache & State
        sessionStorage.setItem(cacheKey, JSON.stringify(result));
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [folderName]
  );

  useEffect(() => {
    fetchDriveData();
  }, [fetchDriveData]);

  return { data, loading, error, refresh: () => fetchDriveData(true) };
};
