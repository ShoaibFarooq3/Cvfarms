import React from 'react'
import '../../Assets/Sidebar.css'
import 'animate.css';
export const SideBar = (props) => {
  return (
    <div className='mainBody animate__animated animate__fadeInRight'>
      <footer>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6'>
                <div className="site-footer_farm_image"> <img
                    src="assets/images/resources/logo.png"
                    className="main-logo"
                    alt="Awesome Image"
                  /></div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 d-flex justify-content-end'>
                <a onClick={props.Toggle}>
            <i className='fa fa-close closeIcon'/></a>
                </div>
      
            </div>
            </footer>
       
       
            
            <div className="container text-left">
                <div className="row no-gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="footer-widget__column footer-widget__about wow fadeInUp p-0" data-wow-delay="100ms">
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
                    
                    <div className="col-xl-12 col-lg-12 col-md-12 pt-4">
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
                    <div className="col-xl-12 col-lg-12 col-md-12 pt-4">
                        <div className="footer-widget__column footer-widget__contact wow fadeInUp p-0" data-wow-delay="400ms">
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
       
       
               </div>
  )
}
