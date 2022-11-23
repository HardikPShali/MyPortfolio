import React from 'react'

const home = () => {
    return (
        <section id="hero" className="section hero w-100">
            <img className="extend-icon" src="assets/img/webdesigner/responsive.png" alt="/" />
            <div className="hero-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center text-lg-start">
                            <div className="hero-image d-inline-block d-lg-none">
                                <img src="assets/img/webdesigner/me-header.png" alt="/" />
                            </div>
                            <div className="hero-content mt-4 mx-auto mx-lg-0 text-lg-left mt-lg-none">
                                <p className="base-color">Software Engineer</p>
                                <h2>Hello , I'm <span className="base-color">Hardik Shali </span>Welcome to my World. </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-footer d-block d-lg-none">
                <a className="download-cv primary-button mt-3 mb-4 d-lg-none" href="resume/Hardik's Resume.pdf" target='_blank'>Download CV</a>
                <div className="social d-lg-none mb-4 d-block">
                    <a href="https://wa.me/+919724641610" target='_blank' className="d-inline-block">
                        <i className="bi bi-whatsapp t-green"></i>
                    </a>
                    <a href="https://instagram.com/harddiksali?igshid=ZDdlNDJhZDc=" target='_blank' className="d-inline-block mx-4">
                        <i className="bi bi-instagram t-purple"></i>
                    </a>
                    {/* <a href="javascript:void(0);" className="d-inline-block">
                        <i className="bi bi-dribbble t-red"></i>
                    </a> */}
                </div>
            </div>
        </section>
    )
}

export default home
