import React from 'react';
import facebookicon from '../../src/img/facebook.png';
import twittericon from '../../src/img/twitter.png';
import instagramicon from '../../src/img/instagram.png';

function Social (){
    return(
        <div className="social-media-section">
            <h3>NYV ON SOCIAL MEDIA</h3>
            <div className="social-media-cards">
                <div className="card">
                    <div className="logo">
                        <img src={facebookicon} alt="" />
                    </div>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={twittericon} alt="" />
                    </div>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={instagramicon} alt="" />
                    </div>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                </div>
            </div>
    </div>
    )
}

export default Social;