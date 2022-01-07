import './footer.css'

function Footer() {
    return (
        <>
            <div className="container">
                <div className="divider" />
            </div>

            <div className="section"></div>

            <div className="footer">
                <div className="container">
                    <div className="footer__items">
                        <div className="footer__item">
                            <div className="logo">
                                <img src="https://preview.colorlib.com/theme/laundry/assets/img/logo/xlogo2_footer.png.pagespeed.ic.qluAfy-9no.webp" alt />
                            </div>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
                                eros
                                dolor interdum nulla.</p>
                            <div className="footer__links">
                                <a href>
                                    <span className="fab fa-twitter" />
                                </a>
                                <a href>
                                    <span className="fab fa-facebook-f" />
                                </a>
                                <a href>
                                    <span className="fab fa-pinterest-p" />
                                </a>
                            </div>
                        </div>
                        <div className="footer__item">
                            <div className="fa-pinterest-p__service">
                                <h3>Services</h3>
                                <div className="footer__services">
                                    <a href="#">Dry celaning</a>
                                    <a href="#">Dry clean</a>
                                    <a href="#">Ironing services</a>
                                    <a href="#">Laundry service london</a>
                                    <a href="#">Laundry app</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer__item">
                            <h3>Get in Touch</h3>
                            <p>
                                <a href="tel:908987898957">(90) 898 789 8957</a>
                            </p>
                            <p>
                                <a href="mailto: laundry@657.com" className="mail">laundry@657.com</a>
                            </p>
                            <p>
                                <a>789/A, Green road NYC-9089</a>
                            </p>
                        </div>
                    </div>
                    <p className="copyright">Copyright © 2021 All rights reserved | This template is made with by <a href="#">Colorlib</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer