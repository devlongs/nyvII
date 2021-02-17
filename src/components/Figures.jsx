import React from 'react';
import usericon from '../../src/img/usericon.png';
import org from '../../src/img/org.png';
import chat from '../../src/img/chatt.png';

function Figures(){
    return(
        <div className="figures">
           <div>
               <img src={usericon} alt="" />
               <h3>REGISTERED USERS</h3>
               <h4>453</h4>
           </div>
           <div>
               <img src={org} alt=""/>
               <h3>REGISTERED ORGANIZATIONS</h3>
               <h4>128</h4>
           </div>
           <div>
               <img src={chat} alt=""/>
               <h3>REGISTERED ORGANIZATIONS</h3>
               <h4>128</h4>
           </div>
        </div>
    )
}

export default Figures;