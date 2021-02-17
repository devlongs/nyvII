import React from 'react';
import facebookicon from '../../src/img/facebook.png';
import twittericon from '../../src/img/twitter.png';
import instagramicon from '../../src/img/instagram.png';

function Quicklinks (){
    return(
        <div className="quicklinks">
        <h2>QUICK LINKS</h2>
        <div className="links">
            <div className="link">
                <p><a href="">Become a NYV Volunteer</a></p>
                <p><a href="">Our Mission</a></p>
                <p><a href="">Our Mission</a></p>
            </div>
            <div className="link">
                <p><a href="">Become a NYV Volunteer</a></p>
                <p><a href="">Our Mission</a></p>
                <p><a href="">Our Mission</a></p>
            </div>
            <div className="link">
                <p><a href="">Become a NYV Volunteer</a></p>
                <p><a href="">Our Mission</a></p>
                <p><a href="">Our Mission</a></p>
            </div>
        </div>
        <a href="#" className="profile">My NYV Profile</a>
        <h3>Follow Us on Social Media</h3>
        <div className="social-icons">
            <img src={facebookicon} alt="" />
            <img src={twittericon} alt="" />
            <img src={instagramicon} alt="" />
        </div>
    </div>
    )
}

export default Quicklinks;