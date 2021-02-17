import React from 'react';
import who from '../../src/img/World_Health_Organization_logo_WHO-688x700.png';

function Partners (){
    return(
        <div className="partners">
            <h3>PARTNERS</h3>
            <div className="partners-wrapper">
                <div className="partner">
                    <img src={who} alt=""/>
                </div>
                <div className="partner">
                    <img src={who} alt="" />
                </div>
                <div className="partner">
                    <img src={who} alt="" />
                </div>
                <div className="partner">
                    <img src={who} alt="" />
                </div>
                <div className="partner">
                    <img src={who} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners;