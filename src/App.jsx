import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/shared/Navbar";
import HomePage from "./assets/container/HomePage";

import Footer from "./assets/components/shared/Footer";
import QuotePage from "./assets/container/QuotePage";
import ResturantsPage from "./assets/container/ResturantsPage";
import FoodsPage from "./assets/container/FoodsPage";
import ContactFormPage from "./assets/container/ContactFormPage";

function App() {
  const [activePage, setActivePage] = useState("home"); // State to manage current page
  console.log("activePage : " + activePage);
  return (
    <>
      <div>
        <main>
          <div className="main-content">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            {activePage === "home" && <HomePage />}
            {activePage === "quote" && <QuotePage />}
            {activePage === "resturants" && <ResturantsPage />}
            {activePage === "foods" && <FoodsPage />}
            {activePage === "contact" && <ContactFormPage />}
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
