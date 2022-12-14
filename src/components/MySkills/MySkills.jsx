import React from 'react';

const MySkills = () => {
    return (
        <div>
             <div className="graph">
       
       <p style={{fontSize: "1.5em", color: "white"}}>HTML</p>
       <div className="graph1">
         <div className="skills html">80%</div>
       </div>
       
       <p style={{fontSize: "1.5em", color: "white"}}>CSS</p>
       <div className="graph1">
         <div className="skills css">70%</div>
       </div>
       
       <p style={{fontSize: "1.5em", color: "white"}}>JavaScript</p>
       <div className="graph1">
         <div className="skills js">50%</div>
       </div>
       
       <p style={{fontSize: "1.5em", color: "white"}}>React</p>
       <div className="graph1">
         <div className="skills react">50%</div>
       </div>
       
   </div>
        </div>
    );
};

export default MySkills;