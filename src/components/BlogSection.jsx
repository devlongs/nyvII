import React from 'react';
import cardimg from '../../src/img/pexels-rodnae-productions-6647175.jpg';
import locationicon from '../../src/img/placeholder.png';
import arrowicon from '../../src/img/output-onlinepngtools.png';
import arrowdownicon from '../../src/img/arrow-down-sign-to-navigate.png';

function BlogSection (){
    return(
        <div className="block-wrapper">
            <div className="blog">
                <div className="blog-cards">
                    <div class="card">
                        <div class="card-img"><img src={cardimg} alt="" />
                        </div>
                        <div class="card-body">
                            <h3>Youth reconnection meeting in Jos</h3>
                            <p class="location"><span><img src={locationicon} alt="" /></span> Jos Plateau State</p>
                            <p class="date">28 January 2021</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-img"><img src={cardimg} alt="" />
                        </div>
                        <div class="card-body">
                            <h3>Youth reconnection meeting in Jos</h3>
                            <p class="location"><span><img src={locationicon} alt="" /></span> Jos Plateau State</p>
                            <p class="date">28 January 2021</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-img"><img src={cardimg} alt="" />
                        </div>
                        <div class="card-body">
                            <h3>Youth reconnection meeting in Jos</h3>
                            <p class="location"><span><img src={locationicon} alt="" /></span> Jos Plateau State</p>
                            <p class="date">28 January 2021</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-img"><img src={cardimg} alt="" />
                        </div>
                        <div class="card-body">
                            <h3>Youth reconnection meeting in Jos</h3>
                            <p class="location"><span><img src={locationicon} alt="" /></span> Jos Plateau State</p>
                            <p class="date">28 January 2021</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-img"><img src={cardimg} alt="" />
                        </div>
                        <div class="card-body">
                            <h3>Youth reconnection meeting in Jos</h3>
                            <p class="location"><span><img src={locationicon} alt="" /></span> Jos Plateau State</p>
                            <p class="date">28 January 2021</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-img"><img src={cardimg} alt="" />
                        </div>
                        <div class="card-body">
                            <h3>Youth reconnection meeting in Jos</h3>
                            <p class="location"><span><img src={locationicon} alt="" /></span> Jos Plateau State</p>
                            <p class="date">28 January 2021</p>
                        </div>
                    </div>
                </div>
                <div className="blog-sidebar hideon-desktop">
                    <div className="opportunity">
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <h3>Covid 19 aid workers in Maiduguri <span><img src={arrowicon} alt="" /></span></h3>
                        <a href="#" className="see-all on-mobile">See All</a>
                        <a href="#" className="see-all on-desktop"><img src={arrowdownicon} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;