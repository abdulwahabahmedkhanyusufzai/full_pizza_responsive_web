import { useState, useEffect } from 'react';

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY >= 350) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a href="#" className={`scrollup ${showScroll ? 'show-scroll' : ''}`} id="scroll-up" onClick={scrollToTop}>
            <i className="ri-arrow-up-line"></i>
        </a>
    );
};

export default ScrollUp;
