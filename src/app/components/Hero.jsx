"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import HeroImageSrc from "../../../public/assets/hero/HeroSection2.jpeg";
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri";
import HeroImage from "./HeroImage";
// import Badge from "./Badge";
import Socials from "./Socials.jsx";

const Hero = ({theme}) => {
  return (
    <section id="home" className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-no-repeat
      bg-bottom bg-cover dark:bg-none mb-20">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/*text*/}
                <div className="flex max-w[600px] flex-col justify-center mx-auto xl:mx-8
                 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary
                     tracking-[4px]">Welcome to O'Beauty Collections
                     </div> 
                    <h2 className="h1 mb-4">O'Beauty Collections</h2>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0"> 
                    Elevate your beauty with O'Beauty Collections, where every blink tells a story. 
                    Discover luxurious lashes that captivate and enhance your natural allure
                    </p>
                    {/*buttons*/}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">   
                        <Link href="/">
                            <Button className="gap-x-2">
                             Shop Now <Send size={18} />
                            </Button>
                        </Link>
                        <Link href="">
                            <Button variant="secondary" className="gap-x-2" download>
                             Contact Us
                             <Download size={18} />
                            </Button>
                        </Link> 
                    </div>
                    <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-10" 
                    iconStyles="text-foreground text-[22] hover:text-primary transition-all" />
                </div>
                {/* image */}
                 <div className="hidden xl:flex relative">
                    <div className=" w-[500px] h-[500px] 
                    -top-1 -right-2 bg-no-repeat absolute"></div>
                    <HeroImage containerStyles=" w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                    imgSrc={HeroImageSrc}
                    />
                </div> 
            </div>
            {/* icon */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary"/>
            </div>
        </div>
    </section>
  )
}

export default Hero
