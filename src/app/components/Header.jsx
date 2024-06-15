"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; 
import Nav from "./Nav";
import Cart from "./Cart";
import logo from "../../../public/assets/header/Logo.jpg"; 
import { usePathname } from "next/navigation"; 

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                header ? 'py-4 bg-pink-100 shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'
            } sticky top-0 z-30 transition-all ${pathname === '/' ? 'bg-pink-100' : ''}`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Image src={logo} alt="Logo" width={100} height={70} /> 
                    <div className="flex items-center gap-x-6">
                        {/* nav */}
                        <Nav
                            containerStyles="hidden xl:flex gap-x-8 items-center"
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <Cart height={40} width={40}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
