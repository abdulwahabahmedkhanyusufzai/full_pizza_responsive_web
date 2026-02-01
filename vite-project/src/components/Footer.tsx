const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <a href="#" className="footer__logo">Pizza</a>
                <div className="footer__content grid">
                    <div>
                        <h3 className="footer__title">Social</h3>
                        <div className="footer__social">
                            <a href="https://facebook.com/" target="_blank" className="footer__social-link">
                                <i className="ri-facebook-circle-fill"></i>
                            </a>

                            <a href="https://instagram.com/" target="_blank" className="footer__social-link">
                                <i className="ri-instagram-fill"></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                                <i className="ri-twitter-fill"></i>
                            </a>

                        </div>
                    </div>

                    <div>
                        <h3 className="footer__title">Payment Methods</h3>
                        <div className="footer__pay">
                            <img src="/img/footer-card-1.png" alt="image" className="footer__pay_image" />
                            <img src="/img/footer-card-2.png" alt="image" className="footer__pay_image" />
                            <img src="/img/footer-card-3.png" alt="image" className="footer__pay_image" />
                            <img src="/img/footer-card-4.png" alt="image" className="footer__pay_image" />

                        </div>
                    </div>

                    <div>
                        <h3 className="footer__title">Subscribe for Discounts</h3>
                        <form action="" className="footer__form">
                            <input type="email" placeholder="Email" className="footer__input" />
                            <button type="submit" className="footer__button button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer__policy">
                <a href="" className="footer__link">Terms & Agreement</a>
                <a href="" className="footer__link">Privacy & Policy</a>

            </div>

            <span className="footer__copy">&#169, All Right Reserved By Abdul Wahab</span>
        </footer>
    );
};

export default Footer;
