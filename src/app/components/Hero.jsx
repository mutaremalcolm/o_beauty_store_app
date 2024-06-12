"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Socials from "./Socials.jsx";
import { RiArrowDownSLine } from "react-icons/ri";
import { Contact, ShoppingBag } from "lucide-react";

const Hero = ({theme}) => {
  return (
    <section
      id="home"
      className="py-12 xl:py-24 h-[84vh] xl:pt-28 mb-20 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero/heroImage.jpeg')" }}
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center bg-transparent bg-opacity-70 p-5 rounded-lg">
          <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
            Welcome to O&apos;Beauty Collections
          </div>
          <h2 className="h1 mb-4">O&apos;Beauty Collections</h2>
          <p className="subtitle max-w-[490px]">
            Elevate your beauty with O&apos;Beauty Collections, where every blink tells a story. 
            Discover luxurious lashes that captivate and enhance your natural allure.
          </p>
          {/* buttons */}
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mb-6">
            <Link href="/">
              <Button className="gap-x-2">
                Shop Now <ShoppingBag size={18} />
              </Button>
            </Link>
            <Link href="">
              <Button variant="secondary" className="gap-x-2">
                Contact Us <Contact size={18} />
              </Button>
            </Link>
          </div>
          <Socials containerStyles="flex gap-x-6 mb-10" iconStyles="text-foreground text-[22] hover:text-primary transition-all" />
        </div>
      </div>
      {/* icon */}
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
}

export default Hero;
