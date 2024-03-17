import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";

const Interface = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <div></div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Interface;
