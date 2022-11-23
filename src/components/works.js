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
                            <a href="javascript:void(0)" data-filter=".webdesign">Internship Projects</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="javascript:void(0)" data-filter=".mobiledesign">Client Project</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="javascript:void(0)" data-filter=".sound">Personal Project</a>
                        </li>
                        {/* <li className="list-inline-item">
                            <a href="javascript:void(0)" data-filter=".graphic">Graphic</a>
                        </li> */}
                    </ul>
                </div>
                <div className="portfolio-items border-line-v row">
                    <div className="col-md-6 col-lg-4 portfolio-item mobiledesign">
                        <div className="portfolio-image">
                            <img src="assets/img/Project/HealthierU.png" alt="/" />
                            <div className="portfolio-icon">
                                <a href="../React-Project.html" className="portfolio-magnific mfp-iframe">
                                    <i className="bi bi-file-earmark-text"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-content">
                            <h6 className="blog-header">React Project</h6>
                            <p className="mb-0">HealthierU</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 portfolio-item webdesign">
                        <div class="portfolio-image">
                            <img src="assets/img/Project/1logo.png" alt="/" />
                            <div class="portfolio-icon">
                                <a href="../DotNet-Project.html" class="portfolio-magnific mfp-iframe">
                                    <i className="bi bi-file-earmark-text"></i>
                                </a>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <h6 class="blog-header">DotNet Project</h6>
                            <p class="mb-0">InsuranceHub</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 portfolio-item webdesign sound">
                        <div class="portfolio-image">
                            <img src="assets/img/Project/logo1.png" alt="/" />
                            <div class="portfolio-icon">
                                <a href="../PHP-Project.html" class="portfolio-magnific mfp-iframe">
                                    <i className="bi bi-file-earmark-text"></i>
                                </a>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <h6 class="blog-header">PHP Project</h6>
                            <p class="mb-0">RoomNRide</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 portfolio-item webdesign sound">
                        <div class="portfolio-box">
                            <div class="portfolio-image">
                                <img src="assets/img/Project/logo.png" alt="/" />
                                <div class="portfolio-icon">
                                    <a href="../Java-Project.html" class="portfolio-magnific mfp-iframe">
                                        <i class="bi bi-file-earmark-text"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="portfolio-content">
                                <h6 class="blog-header">Java Project</h6>
                                <p class="mb-0">H&T Insurance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default works
