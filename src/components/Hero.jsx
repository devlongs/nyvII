import React from 'react';
import logo from '../img/logo.png';

function Hero(){
    return(
        <div className="hero">
            <nav className="navbar">
                <div className="navbar__logo">
                   <img src={logo} alt="#" />
                </div>
                <ul className="navbar__links hideon-desktop">
                    <li><a href="#">VISION</a></li>
                    <li><a href="#">MISSION</a></li>
                    <li><a href="#">OBJECTIVES</a></li>
                    <li><a href="#">VALUES</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">MENU</a></li>
                </ul>
                <a href="#" class="donate-on-mobile">DONATE</a>
                <div class="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>

            <div className="hero__text-contents-wrapper">
                <img src="usericon.png" alt=""/>
                <div className="hero_text-contents__whitespace hideon-desktop"></div>
                <div className="hero__text-contents__main">
                    <ul className="hero__text-contents__main__secondary-btns hideon-desktop">
                        <li><a href="#">DONATE</a></li>
                        <li><a href="#">SIGNUP</a></li>
                        <li><a href="#">LOGIN</a></li>
                    </ul>
                    <h1>Building Strong and Resilient Communities through<br /> Volunteerism</h1>
                    <ul className="hero__text-contents__main__primary-btns">
                        <li><a href="#">BECOME A VOLUNTEER</a></li>
                        <li><a href="#">REQUEST VOLUNTEER</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero;