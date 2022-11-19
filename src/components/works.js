import React from 'react'

const works = () => {
    return (
        <section id="portfolio" className="section portfolio">
            <div className="container">
                <div className="heading-meta-container">
                    <h2 className="heading-title">Portfolio</h2>
                    <h6 className="description">See My Ausome Work</h6>
                </div>
                <div className="row">
                    {/* Portfolio Filters   */}
                    <ul id="portfolio-filter" className="list-inline col-lg-12 portfolio-filter text-center">
                        <li className="list-inline-item">
                            <a href="javascript:void(0)" data-filter="*" className="active">All</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="javascript:void(0)" data-filter=".webdesign">Web Design</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="javascript:void(0)" data-filter=".mobiledesign">Mobile Design</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="javascript:void(0)" data-filter=".sound">Sound</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="javascript:void(0)" data-filter=".graphic">Graphic</a>
                        </li>
                    </ul>
                </div>
                <div className="portfolio-items border-line-v row">

                    <div className="col-md-6 col-lg-4 portfolio-item sound">
                        <div className="portfolio-box">
                            <div className="portfolio-image">
                                <img src="assets/img/webdesigner/portfolio-item1.jpg" alt="/" />
                                <div className="portfolio-icon">
                                    <a href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" className="portfolio-magnific mfp-iframe">
                                        <i className="bi bi-music-note-beamed"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <h6 className="blog-header">Tak photo on the waves</h6>
                                <p className="mb-0">image</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 portfolio-item sound">
                        <div className="portfolio-box">
                            <div className="portfolio-image">
                                <img src="assets/img/webdesigner/portfolio-item2.jpg" alt="/" />
                                <div className="portfolio-icon">
                                    <a href="https://player.vimeo.com/video/158284739" className="portfolio-magnific mfp-iframe">
                                        <i className="bi bi-camera-video"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <h6 className="blog-header">Tak photo on the waves</h6>
                                <p className="mb-0">image</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 portfolio-item sound">
                        <div className="portfolio-box">
                            <div className="portfolio-image">
                                <img src="assets/img/webdesigner/portfolio-item3.jpg" alt="/" />
                                <div className="portfolio-icon">
                                    <a href="portfolio-01-colorfull.html" className="ajax-page-load">
                                        <i className="bi bi-file-earmark-text"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-content">
                                <h6 className="blog-header">Tak photo on the waves</h6>
                                <p className="mb-0">image</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 portfolio-item mobiledesign webdesign">
                        <div className="portfolio-image">
                            <img src="assets/img/webdesigner/portfolio-item4.jpg" alt="/" />
                            <div className="portfolio-icon">
                                <a href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" className="portfolio-magnific mfp-iframe">
                                    <i className="bi bi-music-note-beamed"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-content">
                            <h6 className="blog-header">Detailed Project 2</h6>
                            <p className="mb-0">image</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 portfolio-item mobiledesign sound">
                        <div className="portfolio-image">
                            <img src="assets/img/webdesigner/portfolio-item5.jpg" alt="/" />
                            <div className="portfolio-icon">
                                <a href="https://player.vimeo.com/video/158284739" className="portfolio-magnific mfp-iframe">
                                    <i className="bi bi-camera-video"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-content">
                            <h6 className="blog-header">Detailed Project 2</h6>
                            <p className="mb-0">image</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 portfolio-item mobiledesign">
                        <div className="portfolio-image">
                            <img src="assets/img/webdesigner/portfolio-item6.jpg" alt="/" />
                            <div className="portfolio-icon">
                                <a href="portfolio-01-colorfull.html" className="ajax-page-load">
                                    <i className="bi bi-file-earmark-text"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-content">
                            <h6 className="blog-header">Detailed Project 2</h6>
                            <p className="mb-0">image</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default works
