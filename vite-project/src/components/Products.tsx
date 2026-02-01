const Products = () => {
    return (
        <section className="product__section" id="products">
            <h2 className="section__title">The Most <br /> Devoured Pizzas</h2>
            <div className="product__container container grid">

                <article className="product__card">
                    <img src="/img/product-1.png" alt="image" className="product__img" />
                    <h3 className="product__name">Vegetarian <br /> Pizza </h3>
                    <span className="product__prices">$15</span>

                    <button className="product__button">
                        <i className="ri-shopping-bag-3-fill"></i>
                    </button>
                </article>

                <article className="product__card">
                    <img src="/img/product-2.png" alt="image" className="product__img" />
                    <h3 className="product__name">Pepperoni <br /> Pizza</h3>
                    <span className="product__prices">$10</span>

                    <button className="product__button">
                        <i className="ri-shopping-bag-3-fill"></i>
                    </button>
                </article>

                <article className="product__card">
                    <img src="/img/product-3.png" alt="image" className="product__img" />
                    <h3 className="product__name">Margherita <br /> Pizza</h3>
                    <span className="product__prices">$12</span>

                    <button className="product__button">
                        <i className="ri-shopping-bag-3-fill"></i>
                    </button>
                </article>

                <article className="product__card">
                    <img src="/img/product-4.png" alt="image" className="product__img" />
                    <h3 className="product__name">Mushroom <br /> Pizza</h3>
                    <span className="product__prices">$17</span>

                    <button className="product__button">
                        <i className="ri-shopping-bag-3-fill"></i>
                    </button>
                </article>

                <article className="product__card">
                    <img src="/img/product-5.png" alt="image" className="product__img" />
                    <h3 className="product__name">Italian <br /> Pizza</h3>
                    <span className="product__prices">$10</span>

                    <button className="product__button">
                        <i className="ri-shopping-bag-3-fill"></i>
                    </button>
                </article>
            </div>
        </section>
    );
};

export default Products;
