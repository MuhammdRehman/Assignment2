import React from 'react';

// Importing images
import event1 from '../assets/img/events-1.jpg';
import event2 from '../assets/img/events-2.jpg';
import event3 from '../assets/img/events-3.jpg';
import event4 from '../assets/img/events-4.jpg';

const Events = () => {
    return (
        <section id="events" className="events section">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
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
                            },
                            breakpoints: {
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 40
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 1
                                }
                            }
                        })}
                    </script>
                    <div className="swiper-wrapper">

                        <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${event1})` }}>
                            <h3>Custom Parties</h3>
                            <div className="price align-self-start">$99</div>
                            <p className="description">
                                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                            </p>
                        </div>

                        <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${event2})` }}>
                            <h3>Private Parties</h3>
                            <div className="price align-self-start">$289</div>
                            <p className="description">
                                In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                            </p>
                        </div>

                        <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${event3})` }}>
                            <h3>Birthday Parties</h3>
                            <div className="price align-self-start">$499</div>
                            <p className="description">
                                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                            </p>
                        </div>

                        <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{ backgroundImage: `url(${event4})` }}>
                            <h3>Wedding Parties</h3>
                            <div className="price align-self-start">$899</div>
                            <p className="description">
                                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                            </p>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}

export default Events;
