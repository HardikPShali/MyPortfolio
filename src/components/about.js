import React from 'react'

const about = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                {/* Introducce Me  */}
                <div className="about-boxes">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="about-img">
                                <img src="assets/img/webdesigner/about-img.jpg" alt="/" />
                                <div className="border-img"></div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-description">
                                <h3 className="mb-3">A short story about me , my mission, thinking and craft.</h3>
                                <p className="about-text">I'm a web designer who aware of the tiny moments in a persons life that reveal greater truths. Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio mattis in. Quisque dapibus aliquet dictum. Integer dapibus ullamcorper est, ac .</p>
                            </div>
                            {/* Personal Info  */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled personal-info">
                                        <li>Website : <small><a href="https://retrina.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="701d11191c301508111d001c155e131f1d">[email&#160;protected]</a></small>
                                        </li>
                                        <li>Phone : <small>+123 456 7890</small>
                                        </li>
                                        <li>City : <small> New York, USA</small>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-unstyled personal-info">
                                        <li>Age : <small>30</small>
                                        </li>
                                        <li>Degree : <small>Master</small>
                                        </li>
                                        <li>Freelance : <small>Available</small>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12">
                                    <a href="#contact" className="to-contact primary-button mt-2">Hire me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Count up  */}
                <div id="count-up" className="count-up text-center box-border">
                    <div className="row">
                        {/* Item-01  */}
                        <div className="col-6 col-lg-3 my-4 count-item">
                            <div className="count-icon">
                                <img src="assets/img/colorfull/prototype.png" alt="/" />
                            </div>
                            <span className="timer count-number" data-from="0" data-to="286" data-speed="5000">0</span>
                            <p className="mb-0">Logo Design</p>
                        </div>
                        {/* Item-02  */}
                        <div className="col-6 col-lg-3 my-4 count-item">
                            <div className="count-icon">
                                <img src="assets/img/colorfull/ui-design.png" alt="/" />
                            </div>
                            <span className="timer count-number" data-from="0" data-to="6549" data-speed="5000">0</span>
                            <p className="mb-0">Web Design</p>
                        </div>
                        {/* Item-03  */}
                        <div className="col-6 col-lg-3 my-4 count-item">
                            <div className="count-icon">
                                <img src="assets/img/colorfull/layer.png" alt="/" />
                            </div>
                            <span className="timer count-number" data-from="0" data-to="793" data-speed="5000">0</span>
                            <p className="mb-0">Illustration</p>
                        </div>
                        {/* Item-04 */}
                        <div className="col-6 col-lg-3 my-4 count-item">
                            <div className="count-icon">
                                <img src="assets/img/colorfull/checked.png" alt="/" />
                            </div>
                            <span className="timer count-number" data-from="0" data-to="286" data-speed="5000">0</span>
                            <p className="mb-0">Project Done</p>
                        </div>
                    </div>
                </div>
                {/* Skills  */}
                <div className="skills">
                    <div className="row pt-5">
                        <div className="col-lg-7">
                            <div className="skill-description">
                                <h3 className="mb-3">I have been able to experience & developing this type of skill.</h3>
                                <p className="mb-0">I was doing everything in my power to provide me with all the experiences to provide cost-effective and high quality products to satisfy my customers all over the world</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <ul className="knowledge-item">
                                <li>Graphics and animations</li>
                                <li>Video Formality</li>
                                <li>Short Animationsg</li>
                                <li>Teaching Web Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Skillbar   */}
                <div className="row mt-5 skills">
                    <div className="col-lg-6">
                        <h3 className="subtitle">Design Skills</h3>
                        <div id="skills">
                            {/* Item 01 */}
                            <div className="col-lg-12 skill-box">
                                <div className="skill-text">
                                    <div className="skillbar-title">Logo Design</div>
                                    <div className="skill-bar-percent"><span data-from="0" data-to="100" data-speed="4000">100</span>%</div>
                                </div>
                                <div className="skillbar clearfix" data-percent="100%">
                                    <div className="skillbar-bar"></div>
                                </div>
                            </div>
                            {/* Item 02 */}
                            <div className="col-lg-12 skill-box">
                                <div className="skill-text">
                                    <div className="skillbar-title">Web Design</div>
                                    <div className="skill-bar-percent"><span data-from="0" data-to="95" data-speed="4000">95</span>%</div>
                                </div>
                                <div className="skillbar clearfix" data-percent="95%">
                                    <div className="skillbar-bar"></div>
                                </div>
                            </div>
                            {/* Item 03 */}
                            <div className="col-lg-12 skill-box">
                                <div className="skill-text">
                                    <div className="skillbar-title">Illustration</div>
                                    <div className="skill-bar-percent"><span data-from="0" data-to="85" data-speed="4000">85</span>%</div>
                                </div>
                                <div className="skillbar clearfix" data-percent="85%">
                                    <div className="skillbar-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ms-auto mt-5 mt-lg-0">
                        <h3 className="subtitle">Language</h3>
                        <div className="language-bar">
                            {/* Item 01 */}
                            <div className="language-skill">
                                <h6 className="mb-0">English <span> Fluent</span>
                                </h6>
                                <ul className="list-inline text-right">
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-half"></i>
                                    </li>
                                </ul>
                            </div>
                            {/* Item 02 */}
                            <div className="language-skill">
                                <h6 className="mb-0">Germany <span>Basic</span>
                                </h6>
                                <ul className="list-inline text-right">
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle"></i>
                                    </li>
                                </ul>
                            </div>
                            {/* Item 03 */}
                            <div className="language-skill">
                                <h6 className="mb-0">Turkey <span>Basic</span>
                                </h6>
                                <ul className="list-inline text-right">
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle-fill"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="bi bi-circle"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Client   */}
                <div className="testimonial mt-5">
                    <div className="owl-carousel">
                        {/* Item 01  */}
                        <div className="testimonial-box">
                            <p className="testimonial-comment">"My motivation is customer satisfaction. Trust me and trust your growth asset management to my expertise gained over the years. My goal is continuous achievement.!"</p>
                            <div className="testimonial-item">
                                <div className="testimonial-image">
                                    <img src="assets/img/colorfull/man.png" alt="/" />
                                </div>
                                <div className="testimonial-info">
                                    <p className="mb-0">Leo Anderson</p>
                                    <small className="testimonial-jub">Web Designer</small>
                                </div>
                            </div>
                        </div>
                        {/* Item 02  */}
                        <div className="testimonial-box">
                            <p className="testimonial-comment">"My motivation is customer satisfaction. Trust me and trust your growth asset management to my expertise gained over the years. My goal is continuous achievement.!"</p>
                            <div className="testimonial-item">
                                <div className="testimonial-image">
                                    <img src="assets/img/colorfull/woman.png" alt="/" />
                                </div>
                                <div className="testimonial-info">
                                    <p className="mb-0">Hanah Smith</p>
                                    <small className="testimonial-jub">Web Developer</small>
                                </div>
                            </div>
                        </div>
                        {/* Item 03 */}
                        <div className="testimonial-box">
                            <p className="testimonial-comment">"My motivation is customer satisfaction. Trust me and trust your growth asset management to my expertise gained over the years. My goal is continuous achievement.!"</p>
                            <div className="testimonial-item">
                                <div className="testimonial-image">
                                    <img src="assets/img/colorfull/man1.png" alt="/" />
                                </div>
                                <div className="testimonial-info">
                                    <p className="mb-0">Angela Anderson</p>
                                    <small className="testimonial-jub">Web Designer</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about
