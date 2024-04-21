import React from "react";
import Cardcircle from "./Cardcircle";
import "../circle/circleprogree.scss";

function CircleProgress() {
  return (
    <div className="margin-circleprogree">
      <div className="container-circleprogree">
        <Cardcircle classOfContainer ="cardd card1" program ="HTML" percent={90} classPercent="percent percent-90"/> 
        <Cardcircle classOfContainer ="cardd card3" program ="Css" percent={90  } classPercent="percent percent-90  "/> 
        <Cardcircle classOfContainer ="cardd card5" program ="JavaScript" percent={80} classPercent="percent percent-80"/> 
        <Cardcircle classOfContainer ="cardd card4" program ="Sass" percent={80} classPercent="percent percent-80"/> 
        <Cardcircle classOfContainer ="cardd card2" program ="Bootstrap" percent={80} classPercent="percent percent-80"/> 
        <Cardcircle classOfContainer ="cardd card6" program ="React" percent={80} classPercent="percent percent-80"/> 
        <Cardcircle classOfContainer ="cardd card9" program ="git" percent={70} classPercent="percent percent-70"/> 
        <Cardcircle classOfContainer ="cardd card7" program ="Vue" percent={60} classPercent="percent percent-60"/> 
        <Cardcircle classOfContainer ="cardd card8" program ="Photoshop" percent={80} classPercent="percent percent-80"/> 
      

      

      </div>
    </div>
  );
}

export default CircleProgress;
