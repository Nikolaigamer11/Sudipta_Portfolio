import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: "#1e2939" }}
    >
      {/* 404 */}
      <h1 className="text-7xl font-bold mb-4" style={{ color: "#338370" }}>
        404
      </h1>

      {/* Message */}
      <p className="text-lg mb-8" style={{ color: "#338370" }}>
        Page not found
      </p>

      {/* Home link */}
      <NavLink
        to="/"
        className="flex items-center gap-2 px-5 py-3 rounded-lg
                   transition-colors duration-200"
        style={{
          backgroundColor: "#1f1f23",
          color: "#338370",
        }}
      >
        <FiHome size={20} />
        <span>Go back home</span>
      </NavLink>
    </div>
  );
};

export default NotFound;
