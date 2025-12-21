import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen w-full font-times ">
      {/* CONTENT WRAPPER */}
      <div
        className="
          mx-auto
          w-full
          text-sm
          md:text-xl
          max-w-screen-xl
          px-2 sm:px-4 md:px-6
        "
      >
        <BrowserRouter>
          <Header />

          <Nav />
        </BrowserRouter>

        <Footer />
      </div>
    </div>
  );
}

export default App;
