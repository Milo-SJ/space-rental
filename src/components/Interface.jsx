import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import { Routes, Route } from "react-router-dom";
import Destinations from "../pages/Destinations";
import Contact from "../pages/Contact";
import ShipsPage from "../pages/ShipsPage";

const Interface = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />;
            <Route path="/destinations" element={<Destinations />} />;
            <Route path="/contactus" element={<Contact />} />;
            <Route path="/ships" element={<ShipsPage />} />;
          </Routes>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Interface;
