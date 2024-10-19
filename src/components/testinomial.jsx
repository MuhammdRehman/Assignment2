import React from 'react';

// Importing images
import img1 from 'assets/img/testimonials/testimonials-1.jpg';
import img2 from 'assets/img/testimonials/testimonials-2.jpg';
import img3 from 'assets/img/testimonials/testimonials-3.jpg';
import img4 from 'assets/img/testimonials/testimonials-4.jpg';

function Testinomial() {
    return (
        <section id="testimonials" className="testimonials section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>TESTIMONIALS</h2>
                <p>What Are They <span className="description-title">Saying About Us</span></p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper init-swiper">
                    <script type="application/json" className="swiper-config">
                        {JSON.stringify({
                            loop: true,
                            speed: 600,
                            autoplay: {
                                delay: 5000
                            },
                            slidesPerView: "auto",
                            pagination: {
                                el: ".swiper-pagination",
                                type: "bullets",
                                clickable: true
                            }
                        })}
                    </script>
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="row gy-4 justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="testimonial-content">
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <img src={img1} className="img-fluid testimonial-img" alt="Saul Goodman" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="row gy-4 justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="testimonial-content">
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <img src={img2} className="img-fluid testimonial-img" alt="Sara Wilsson" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="row gy-4 justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="testimonial-content">
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <img src={img3} className="img-fluid testimonial-img" alt="Jena Karlis" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="row gy-4 justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="testimonial-content">
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <img src={img4} className="img-fluid testimonial-img" alt="John Larson" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>

        </section>
    );
}

export default Testinomial;
