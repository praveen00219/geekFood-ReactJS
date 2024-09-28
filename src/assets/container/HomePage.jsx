import React from "react";
import Home from "../components/home/Home";

function HomePage() {
  return (
    <div>
      <article className="home active" data-page="home">
        <Home />
      </article>
    </div>
  );
}

export default HomePage;
