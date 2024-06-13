import React from "react";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero theme={undefined} />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="shop">
        <Shop />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}
