const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="contact__container container grid">
                <div className="contact__data">
                    <h2 className="section__title">Contact Now</h2>
                    <div className="contact__info grid">
                        <div>
                            <h3 className="contact__title">Write Us</h3>
                            <div className="contact__social">
                                <a href="https://api.whatsapp.com/send?phone=51123456789&text=Hello" target="_blank" className="contact__social__link">
                                    <i className="ri-whatsapp-fill"></i>
                                </a>
                                <a href="https://m.me/bedimcode" target="_blank" className="contact__social__link">
                                    <i className="ri-messenger-fill"></i>
                                </a>
                                <a href="https://t.me/telegram" target="_blank" className="contact__social__link">
                                    <i className="ri-telegram-fill"></i>
                                </a>

                            </div>
                        </div>

                        <div>
                            <h3 className="contact__title">Delivery</h3>

                            <address className="contact__address">
                                +00-987-7654-321<br />
                                +11-012345
                            </address>
                        </div>

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <address className="contact__address">
                                Lima - Sun City -Peru <br />
                                Av. Moon #4321
                            </address>
                            <a href="https://maps.goo.gl/iHTNbLDu7EYtJW2x5" target="_blank" className="contact__map">
                                <i className="ri-map-pin-full"></i>
                                <span>View on Map</span>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="contact__image">
                    <img src="/img/contact-img.png" alt="image" className="contact__img" />
                </div>
                <img src="/img/sticker-tomato.svg" alt="image" className="contact__sticker_1" />
                <img src="/img/sticker-mushroom.svg" alt="image" className="contact__sticker_2" />
                <img src="/img/sticker-onion.svg" alt="image" className="contact__sticker_3" />

            </div>
        </section>
    );
};

export default Contact;
