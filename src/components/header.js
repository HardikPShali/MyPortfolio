import React from 'react'

const header = () => {
    return (
        <body className="max-width-d">

            {/* Preloader */}
            <div id="line-loader">
                <div className="middle-line"></div>
            </div>

            {/* Menu Overlay Mobile  */}
            <div className="menu-overlay d-none"></div>

            {/* Right Side Start  */}
            <div className="right-side d-none d-lg-block">
                <div id="date"></div>
                <div className="social-box">
                    <div className="follow-label">
                        <span>Follow Me</span>
                    </div>
                    <div className="social d-none d-lg-block">
                        <a href="javascript:void(0);">
                            <i className="bi bi-whatsapp t-green"></i>
                        </a>
                        <a href="javascript:void(0);">
                            <i className="bi bi-instagram t-purple"></i>
                        </a>
                        <a href="javascript:void(0);">
                            <i className="bi bi-dribbble t-red"></i>
                        </a>
                    </div>
                </div>
                <div className="next-prev-page">
                    <button type="button" className="prev-page bg-base-color hstack">
                        <i className="bi bi-chevron-compact-up mx-auto"></i>
                    </button>
                    <button type="button" className="next-page bg-base-color mt-3 hstack">
                        <i className="bi bi-chevron-compact-down mx-auto"></i>
                    </button>
                </div>
            </div>
            {/* Right Side End   */}

            {/* Left Side Start   */}
            <div className="left-side  nav-close">
                <div className="menu-content-align">
                    <div className="left-side-image">
                        <img src="assets/img/webdesigner/profile-img.jpg" alt="/" />
                    </div>
                    <h1 className="mt-1">Hardik Shali</h1>
                    <a className="download-cv primary-button d-none d-lg-inline-block" href="resume/Hardik's Resume.pdf" target='_blank'>Download CV</a>
                    <div className="container d-lg-none d-inline-block">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="text-muted mb-0">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-align">
                    <ul className="list-group menu text-center " id="menu">
                        <li className="list-group-item">
                            <a href="#home">
                                <i className="bi bi-house"></i>
                                <span>home</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#about" className="custom-btn">
                                <i className="bi bi-person"></i>
                                <span>about</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#resume">
                                <i className="bi bi-clipboard-check"></i>
                                <span>resume</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#portfolio">
                                <i className="bi bi-collection"></i>
                                <span>works</span>
                            </a>
                        </li>
                        {/* <li className="list-group-item">
                            <a href="#blog">
                                <i className="bi bi-book"></i>
                                <span>blog</span>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#contact">
                                <i className="bi bi-geo-alt"></i>
                                <span>contact</span>
                            </a>
                        </li> */}
                    </ul>
                    <div className="menu-footer">
                        <a className="download-cv primary-button mt-3 mb-4 d-lg-none" href="javascript:void(0);">Download CV</a>
                        <div className="social d-lg-none d-block">
                            <a href="javascript:void(0);" className="d-inline-block">
                                <i className="bi bi-whatsapp t-green"></i>
                            </a>
                            <a href="javascript:void(0);" className="d-inline-block mx-4">
                                <i className="bi bi-instagram t-purple"></i>
                            </a>
                            <a href="javascript:void(0);" className="d-inline-block">
                                <i className="bi bi-dribbble t-red"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Left Side End   */}
        </body>
    )
}

export default header
