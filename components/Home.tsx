const Home = () => {
    return (
        <section className="home-section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">Crispy And<br /> Pizzas</h1>
                    <p className="home__description">
                        Order the best pizzas to end your hunger and make family moments more memorable,place your order now.
                    </p>
                    <a href="#products" className="button">Order Pizza Now</a>

                    <img src="/img/sticker-pizza.svg" alt="image" className="home__sticker_1" />
                    <img src="/img/sticker-leaf.svg" alt="image" className="home__sticker_2" />

                </div>
                <div className="home__images">
                    <img src="/img/home-pizza.png" alt="image" className="home__pizza" />
                    <img src="/img/home-board.png" alt="image" className="home__board" />
                    <img src="/img/home-leaf-1.png" alt="image" className="home__ingredient home__leaf_1" />
                    <img src="/img/home-leaf-2.png" alt="image" className="home__ingredient home__leaf_2" />
                    <img src="/img/home-pepperoni.png" alt="image" className="home__ingredient home__pepperoni" />
                    <img src="/img/home-mushroom.png" alt="image" className="home__ingredient home__mushroom" />
                    <img src="/img/home-olive.png" alt="image" className="home__ingredient home__olive" />
                    <img src="/img/home-tomato.png" alt="image" className="home__ingredient home__tomato" />
                </div>
            </div>
        </section>
    );
};

export default Home;
