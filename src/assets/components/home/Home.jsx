import React from "react";
import Navbar from "../shared/Navbar";
import Hero from "./Hero";
import Details from "./Details";
import Card from "./Card";
import Footer from "../shared/Footer";

function Home() {
  return (
    <div className="">
      <Hero />
      <Details />
      <Card />
    </div>
  );
}

export default Home;
