const About = () => {
    return (
        <section className="about__section" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title">Learn More About<br /> Our History</h2>
                    <p className="about__description">
                        The secret to success is best ingredients to make a better pizza .Today we strive for perfection,just as we have been doing for 15 years when we first opened the pizzeria in Lima--Peru.
                    </p>
                    <a href="#popular" className="button">The Best Pizzas</a>

                    <img src="/img/sticker-cheese.svg" alt="image" className="about__sticker" />
                </div>
                <img src="/img/about-img.png" alt="image" className="about__img" />
            </div>
        </section>
    );
};

export default About;
