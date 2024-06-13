import { useRef } from 'react';
import { motion } from 'framer-motion';

const links = [
    { id: 'home', name: 'Home' },
    { id: 'about-us', name: 'About Us' },
    { id: 'shop', name: 'Shop' },
    { id: 'reviews', name: 'Reviews' }, 
    { id: 'contact', name: 'Contact' }
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const navRef = useRef(null);

    const scrollToSection = (id, event) => {
        event.preventDefault(); 
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${containerStyles}`} ref={navRef}>
            {links.map((link, index) => (
                <a
                    key={index}
                    href={`#${link.id}`}
                    className={`capitalize ${linkStyles}`}
                    onClick={(event) => scrollToSection(link.id, event)}
                >
                    {link.name}
                    <motion.span
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'tween' }}
                        layoutId='underline'
                        className={`${underlineStyles}`}
                    />
                </a>
            ))}
        </nav>
    );
};

export default Nav;
