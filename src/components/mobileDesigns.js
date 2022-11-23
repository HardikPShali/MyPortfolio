import React from 'react'

const mobileDesigns = () => {
    return (
        <div>
            {/* <!--  Mobile Next and Prev Button Start --> */}
            <div class="next-prev-page d-block d-lg-none">
                <button type="button" class="prev-page bg-base-color hstack">
                    <i class="bi bi-chevron-compact-left mx-auto"></i>
                </button>
                <button type="button" class="next-page bg-base-color mt-1 mt-lg-3 hstack">
                    <i class="bi bi-chevron-compact-right mx-auto"></i>
                </button>
            </div>
            {/* <!--  Mobile Next and Prev Button End -->

      <!--  Navbar Button Mobile Start --> */}
            <div class="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* <!--  Navbar Button Mobile End --> */}

            {/* <!--  Background Shapes Start  --> */}
            <div class="area">
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            {/* <!-- Mouase Magic Cursor Start --> */}
            <div class="m-magic-cursor mmc-outer"></div>
            <div class="m-magic-cursor mmc-inner"></div>
            {/* <!-- Mouase Magic Cursor End --> */}
        </div>
    )
}

export default mobileDesigns
