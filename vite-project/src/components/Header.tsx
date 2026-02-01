import { useState, useEffect } from 'react';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [headerShadow, setHeaderShadow] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Header Shadow
            if (window.scrollY >= 50) {
                setHeaderShadow(true);
            } else {
                setHeaderShadow(false);
            }

            // Active Link
            const sections = document.querySelectorAll('section[id]');
            const scrollDown = window.scrollY;

            sections.forEach((current: any) => {
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id');

                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className={`header ${headerShadow ? 'shadow-header' : ''}`} id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img src="/img/logo-pizza.svg" alt="image" />
                    Pizza
                </a>

                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li>
                            <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`} onClick={closeMenu}>Home</a>
                        </li>

                        <li>
                            <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={closeMenu}>About Us</a>
                        </li>

                        <li>
                            <a href="#popular" className={`nav__link ${activeSection === 'popular' ? 'active-link' : ''}`} onClick={closeMenu}>Popular</a>
                        </li>

                        <li>
                            <a href="#products" className={`nav__link ${activeSection === 'products' ? 'active-link' : ''}`} onClick={closeMenu}>Products</a>
                        </li>

                        <li>
                            <a href="#contact" className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`} onClick={closeMenu}>Contact</a>
                        </li>

                    </ul>
                    <div className="nav__close" id="nav-close" onClick={closeMenu}>
                        <i className="ri-close-large-line"></i>
                    </div>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <i className="ri-apps-2-fill"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
