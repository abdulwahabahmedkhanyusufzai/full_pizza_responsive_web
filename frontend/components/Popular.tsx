import { useEffect } from 'react';

declare const Swiper: any;

const Popular = () => {
    useEffect(() => {
        try {
            new Swiper('.popular__swiper', {
                loop: true,
                grabCursor: true,
                slidesPerView: 'auto',
                centeredSlides: 'auto',
            });
        } catch (e) {
            console.warn("Swiper not loaded", e);
        }
    }, []);

    return (
        <section className="popular__section" id="popular">
            <div className="popular__container container grid">
                <div className="popular__data">
                    <h2 className="section__title">Discover<br />Popular Pizza</h2>
                    <p className="popular__description">
                        Select the best Prepared and Delicious flavours.We have collected some popular recipes from around the world for you to choose your faviourites.
                    </p>

                </div>
                <div className="popular__swiper swiper">
                    <img src="/img/popular-dish.png" alt="image" className="popular__dish" />
                    <div className="swiper-wrapper">
                        <article className="popular__card swiper-slide">
                            <img src="/img/popular-1.png" alt="image" className="popular__image" />
                            <h3 className="popular__title">Margherita Pizza</h3>
                        </article>

                        <article className="popular__card swiper-slide">
                            <img src="/img/popular-2.png" alt="image" className="popular__image" />
                            <h3 className="popular__title">Mushroom Pizza</h3>
                        </article>

                        <article className="popular__card swiper-slide">
                            <img src="/img/popular-3.png" alt="image" className="popular__image" />
                            <h3 className="popular__title">Pepperoni Pizza</h3>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Popular;
