const ImgCheck = ({ src }) => {
  if (!src) return null; // If no src, render nothing
  return <img src={src} alt="" className="w-1/4 h-auto rounded-lg" />;
};

function IllHeader({ p_img, header, parag }) {
  return (
    <section className="flex items-center px-5  flex-col md:flex-row gap-4">
      <ImgCheck src={p_img} />

      <div>
        {header && (
          <h3 className="text-2xl font-bold dark:text-gray-200 ">{header}</h3>
        )}

        {parag && (
          <p className=" whitespace-pre-line py-2 dark:text-gray-200 leading-4 md:leading-6">
            {parag}
          </p>
        )}
      </div>
    </section>
  );
}

export default IllHeader;
