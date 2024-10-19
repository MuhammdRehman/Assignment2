import React from 'react';
import menuItem1 from '../assets/img/menu/menu-item-1.png';
import menuItem2 from '../assets/img/menu/menu-item-2.png';
import menuItem3 from '../assets/img/menu/menu-item-3.png';
import menuItem4 from '../assets/img/menu/menu-item-4.png';
import menuItem5 from '../assets/img/menu/menu-item-5.png';
import menuItem6 from '../assets/img/menu/menu-item-6.png';

function Menu() {
    return (
        <section id="menu" className="menu section">

            <div className="container section-title" data-aos="fade-up">
                <h2>Our Menu</h2>
                <p><span>Check Our</span> <span className="description-title">Yummy Menu</span></p>
            </div>

            <div className="container">

                <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">

                    <li className="nav-item">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                            <h4>Starters</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                            <h4>Breakfast</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                            <h4>Lunch</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                            <h4>Dinner</h4>
                        </a>
                    </li>

                </ul>

                <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

                    <div className="tab-pane fade active show" id="menu-starters">

                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Starters</h3>
                        </div>

                        <div className="row gy-5">

                            <div className="col-lg-4 menu-item">
                                <a href={menuItem1} className="glightbox">
                                    <img src={menuItem1} className="menu-img img-fluid" alt=""/>
                                </a>
                                <h4>Magnam Tiste</h4>
                                <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
                                <p className="price">$5.95</p>
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href={menuItem2} className="glightbox">
                                    <img src={menuItem2} className="menu-img img-fluid" alt=""/>
                                </a>
                                <h4>Aut Luia</h4>
                                <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
                                <p className="price">$14.95</p>
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href={menuItem3} className="glightbox">
                                    <img src={menuItem3} className="menu-img img-fluid" alt=""/>
                                </a>
                                <h4>Est Eligendi</h4>
                                <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
                                <p className="price">$8.95</p>
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href={menuItem4} className="glightbox">
                                    <img src={menuItem4} className="menu-img img-fluid" alt=""/>
                                </a>
                                <h4>Eos Luibusdam</h4>
                                <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
                                <p className="price">$12.95</p>
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href={menuItem5} className="glightbox">
                                    <img src={menuItem5} className="menu-img img-fluid" alt=""/>
                                </a>
                                <h4>Eos Luibusdam</h4>
                                <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
                                <p className="price">$12.95</p>
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href={menuItem6} className="glightbox">
                                    <img src={menuItem6} className="menu-img img-fluid" alt=""/>
                                </a>
                                <h4>Laboriosam Direva</h4>
                                <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
                                <p className="price">$9.95</p>
                            </div>

                        </div>
                    </div>

                    {/* Repeat similar structure for Breakfast, Lunch, Dinner */}
                    
                    {/* Breakfast Tab */}
                    <div className="tab-pane fade" id="menu-breakfast">
                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Breakfast</h3>
                        </div>
                        <div className="row gy-5">
                            {/* Add breakfast items here, similar to starters */}
                        </div>
                    </div>

                    {/* Lunch Tab */}
                    <div className="tab-pane fade" id="menu-lunch">
                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Lunch</h3>
                        </div>
                        <div className="row gy-5">
                            {/* Add lunch items here, similar to starters */}
                        </div>
                    </div>

                    {/* Dinner Tab */}
                    <div className="tab-pane fade" id="menu-dinner">
                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Dinner</h3>
                        </div>
                        <div className="row gy-5">
                            {/* Add dinner items here, similar to starters */}
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Menu;
