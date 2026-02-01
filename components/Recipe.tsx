const Recipe = () => {
    return (
        <section className="recipe__section">
            <h2 className="section__title">Fresh And <br /> Natural Ingredients</h2>

            <div className="recipe__container container grid">
                <div className="recipe__list grid">
                    <div className="recipe__ingredient">
                        <img src="/img/recipe-flour.png" alt="image" className="recipe__image" />
                        <div>
                            <h3 className="recipe__name">Flour</h3>
                            <p className="recipe__description">The best wheat from the field for the best flour.</p>
                        </div>
                    </div>


                    <div className="recipe__ingredient">
                        <img src="/img/recipe-cheese.png" alt="image" className="recipe__image" />
                        <div>
                            <h3 className="recipe__name">Cheese</h3>
                            <p className="recipe__description">Indulge in cheese for a healthy future.</p>
                        </div>
                    </div>


                    <div className="recipe__ingredient">
                        <img src="/img/recipe-sauces.png" alt="image" className="recipe__image" />
                        <div>
                            <h3 className="recipe__name">Sauces</h3>
                            <p className="recipe__description">Add a touch of salsa to your life and it will taste better.</p>
                        </div>
                    </div>


                    <div className="recipe__ingredient">
                        <img src="/img/recipe-tomato.png" alt="image" className="recipe__image" />
                        <div>
                            <h3 className="recipe__name">Vegetables</h3>
                            <p className="recipe__description">Vegetables full of essence of nature and organic.</p>
                        </div>
                    </div>


                    <div className="recipe__ingredient">
                        <img src="/img/recipe-meat.png" alt="image" className="recipe__image" />
                        <div>
                            <h3 className="recipe__name">Meats</h3>
                            <p className="recipe__description">The best fresh meats for your health</p>
                        </div>
                    </div>

                </div>
                <img src="/img/recipe-img.png" alt="image" className="recipe__img" />
            </div>
        </section>
    );
};

export default Recipe;
