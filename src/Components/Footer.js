import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
          <footer className="site-footer text-left">
            <div className="site-footer_farm_image"><img src="assets/images/resources/site-footer-farm.png" alt="Farm Image"/></div>
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="footer-widget__column footer-widget__about wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__title">
                                <h3>About</h3>
                            </div>
                            <div className="footer-widget_about_text">
                                <p>Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat posuere dui. Pellentesque
                                    venenatis sem non lacus ac auctor.</p>
                            </div>
                            <form>
                                <div className="footer_input-box">
                                    <input type="Email" placeholder="Email Address"/>
                                    <button type="submit" className="button"><i className="fa fa-check"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="footer-widget__column footer-widget__link wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__title">
                                <h3>Explore</h3>
                            </div>
                            <ul className="footer-widget__links-list list-unstyled">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="service.html">Services</a></li>
                                <li><a href="projects.html">Our Projects</a></li>
                                <li><a href="farmers.html">Meet the Farmers</a></li>
                                <li><a href="news.html">Latest News</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget__column footer-widget__news wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__title">
                                <h3>News</h3>
                            </div>
                            <ul className="footer-widget__news list-unstyled">
                                <li>
                                    <div className="footer-widget__news_image">
                                        <img src="assets/images/resources/footer-1-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="footer-widget__news_text">
                                        <p><a href="news_detail.html"> Learn 10 Best Tips for New Formers</a></p>
                                    </div>
                                    <div className="footer-widget__news_date_box">
                                        <p>30 Oct, 2019</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-widget__news_image">
                                        <img src="assets/images/resources/footer-1-img-2.jpg" alt=""/>
                                    </div>
                                    <div className="footer-widget__news_text">
                                        <p><a href="news_detail.html">Farmer Sentiment Darkens Hopes Fade</a></p>
                                    </div>
                                    <div className="footer-widget__news_date_box">
                                        <p>30 Oct, 2019</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget__column footer-widget__contact wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__title">
                                <h3>Contact</h3>
                            </div>
                            <div className="footer-widget_contact">
                                <p>66 Broklyn Street, New Town<br/>DC 5752, New Yrok</p>
                                <a href="mailto:needhelp@agrikol.com">needhelp@agrikol.com</a><br/>
                                <a href="tel:666-888-0000">666 888 0000</a>
                                <div className="site-footer__social">
                                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-dribbble"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="site-footer_bottom">
            <div className="container">
                <div className="site-footer_bottom_copyright">
                    <p>@ All copyright 2022, <a href="#">ZenithInnovations.net</a></p>
                </div>
                <div className="site-footer_bottom_menu">
                    <ul className="list-unstyled">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </>
    )
  }
}
