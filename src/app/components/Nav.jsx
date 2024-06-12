import { useRef } from 'react';
import { motion } from 'framer-motion';
import ShoppingCart from './ShoppingCart';

const links = [
    { id: 'home', name: 'Home' },
    { id: 'shop', name: 'Shop' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'about us', name: 'About Us' },
    { id: 'contact', name: 'Contact' }
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const navRef = useRef(null);

    const scrollToSection = (id) => {
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
                    onClick={() => scrollToSection(link.id)}
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
