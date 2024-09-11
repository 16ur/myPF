import anime from "animejs/lib/anime.es.js";

import "./CoreContent.css";
import pdpLogo from "../../assets/profilePic.png";
import { useEffect } from "react";

function CoreContent() {
  useEffect(() => {
    anime({
      targets: ".navBar",
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });
  });
  return (
    <div>
      <div className="coreContent">
        <div className="container">
          <img src={pdpLogo} className="pdpLogoClass" alt="pdp-logo" />
          <div className="textContainer">
            <h1 className="coreContentTitle">Hello, je suis Axel Manguian.</h1>
            <h2>Étudiant en BUT Informatique</h2>
            <div className="coreContentSubTitle">
              <p>
                <span className="icons">🌎</span>Basé à Marseille
              </p>
              <p>
                <span className="icons">📕</span>IUT Aix-Marseille
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreContent;
