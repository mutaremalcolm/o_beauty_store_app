import React from "react";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";

export default function Home() {
  return (
    <main>
      <Hero theme={undefined} />
      <AboutUs />
      <Shop />
      <Reviews />
      
    </main>
  );
}
