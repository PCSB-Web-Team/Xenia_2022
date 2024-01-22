import "./home4.css";
// import BlockchainHole from "../../assets/images/background/blockchain_black_hole-rotated.png";
// import HomepageBottomEarth from "../../assets/images/background/homepage-earth-background.jpg"
import gradientBlock from "../../assets/images/gradient-small-cube.svg";
import hex_2xblock_left from "../../assets/images/Block_x2_Left_shadow.png";
import hex_2xblock_right from "../../assets/images/Block_x2_Right_shadowless.png";
import hex_3xblock_left from "../../assets/images/Block_x3_Left_shadow.png";
import hex_3xblock_right from "../../assets/images/Block_x3_Right_shadowless.png";
import sponsors_logo from "../../assets/images/Cion Logo_Horizontal Stacked_Green.svg";
// import trial_image2 from "../../assets/images/trial_image2.png"; 
import Xenia_Logo from "../../assets/images/xenia_logo_blank.png";
import space from "../../assets/images/space.png";
import HomepageBottomEarth_transparent from "../../assets/images/background/homepage-earth-background-transparent.png"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
// import { Link } from "react-router-dom";

function Homepage() {

  function animationPointsGenerator({ initialXEndpoints, initialYEndpoints, curveValue }) {
    const xEndpoints = initialXEndpoints.split(";").map(x => parseInt(x));
    let xCount = xEndpoints[0];

    let x = ""
    if (curveValue >= 0) {
      while (xCount < xEndpoints[1]) {
        xCount += (curveValue + Math.floor(Math.random() * (10 / (xEndpoints[1] - xEndpoints[0]))));
        x += xCount + ";";
      }
    } else {
      while (xCount > xEndpoints[1]) {
        xCount += (curveValue + Math.floor(Math.random() * (10 / (xEndpoints[0] - xEndpoints[1]))));
        x += xCount + ";";
      }
    }

    return {
      x,
      y: initialYEndpoints
    }
  }

  const animationInitials = [
    {
      initialXEndpoints: "500;500",
      initialYEndpoints: "0;20;-5",
      curveValue: -3
    },
    {
      initialXEndpoints: "400;-20",
      initialYEndpoints: "10;260",
      curveValue: 30
    },
    {
      initialXEndpoints: "600;1075",
      initialYEndpoints: "10;340",
      curveValue: 25
    },
    {
      initialXEndpoints: "500;650",
      initialYEndpoints: "140;350",
      curveValue: 3
    },
    {
      initialXEndpoints: "400;200",
      initialYEndpoints: "90;460",
      curveValue: -15
    },
    {
      initialXEndpoints: "470;450",
      initialYEndpoints: "170;310",
      curveValue: -5
    },
    {
      initialXEndpoints: "440;310",
      initialYEndpoints: "170;550",
      curveValue: -25
    },
    {
      initialXEndpoints: "400;210",
      initialYEndpoints: "10;150",
      curveValue: -5
    },
    {
      initialXEndpoints: "600;750",
      initialYEndpoints: "100;550",
      curveValue: 15
    },
    {
      initialXEndpoints: "610;850",
      initialYEndpoints: "10;70",
      curveValue: 40
    },
    {
      initialXEndpoints: "460;100",
      initialYEndpoints: "10;30",
      curveValue: -20
    },
    {
      initialXEndpoints: "450;-50",
      initialYEndpoints: "70;150",
      curveValue: -20
    },
  ]

  const floatingIcons = [gradientBlock, hex_2xblock_left, hex_3xblock_right, hex_2xblock_right, gradientBlock, hex_3xblock_left]

  for (let i = 0; i < animationInitials.length; i++) {
    floatingIcons.push(
      <image key={i} id={i} x={animationInitials[i].initialXEndpoints.split(";")[0]} y={animationInitials[i].initialYEndpoints.split(";")[0]} href={floatingIcons[i % 6]} style={{ AnimationDuration: `${9 + i}s` }} >
        <animate attributeName="x" values={animationPointsGenerator(animationInitials[i]).x} dur={`${6 + i}s`} repeatCount="indefinite" />
        <animate attributeName="y" values={animationPointsGenerator(animationInitials[i]).y} dur={`${6 + i}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;1;1;.25;.45;.6;.7;.5;.3;0" dur={`${6 + i}s`} repeatCount="indefinite" />
        <animate attributeName="width" values="1;5;10;20;25;30;33.5;45;57.5;60;72.5;85;90;95;105" dur={`${6 + i}s`} repeatCount="indefinite" />
        <animate attributeName="height" values="1;5;10;20;25;30;33.5;45;57.5;60;72.5;85;90;95;105" dur={`${6 + i}s`} repeatCount="indefinite" />
      </image>
    );
  }

  return (
    <div className="homepage">
      <div className="homepage-background-container">
        <div class="tso-rainbow"></div>
        <MouseParallaxContainer resetOnLeave containerStyles={{ position: "absolute" }}>
          <MouseParallaxChild factorX={0.04} factorY={0.02} inverted >
            <img
              className="homepage-background-img hole"
              src={space}
              alt="homepage-gradient"
            />
          </MouseParallaxChild>
          <div className="falling-coins">
            <svg className="falling-coins-svg" preserveAspectRatio="xMinYMin">
              {floatingIcons}
            </svg>
          </div>
          <MouseParallaxChild factorX={0.02} factorY={0.04} >
            <img
              className="homepage-background-img earth"
              src={HomepageBottomEarth_transparent}
              alt="homepage-background"
            />
            <svg className="earth-pulses-container">
              <g className="pulse-button">
                <circle
                  id="core"
                  cx={"400"}
                  cy={"300"}
                  r="45"
                ></circle>
                <circle
                  id="radar"
                  cx={"400"}
                  cy={"300"}
                  r="80"
                ></circle>
              </g>
              <g className="pulse-button">
                <circle
                  id="core"
                  cx={"600"}
                  cy={"200"}
                  r="30"
                ></circle>
                <circle
                  id="radar"
                  cx={"600"}
                  cy={"200"}
                  r="65"
                ></circle>
              </g>
              <g className="pulse-button">
                <circle
                  id="core"
                  cx={"800"}
                  cy={"20"}
                  r="10"
                ></circle>
                <circle
                  id="radar"
                  cx={"800"}
                  cy={"20"}
                  r="30"
                ></circle>
              </g>
              <g className="pulse-button">
                <circle
                  id="core"
                  cx={"1200"}
                  cy={"130"}
                  r="65"
                ></circle>
                <circle
                  id="radar"
                  cx={"1200"}
                  cy={"130"}
                  r="120"
                ></circle>
              </g>
            </svg>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
      <header className="homepage-contents">
        <div className="logos">
          <a href="https://www.ciondigital.com/" target="_blank" rel="noopener noreferrer">
            <img className="sponsors-logo" src={sponsors_logo} alt="sponsors-logo" title="Cion Digital"></img>
          </a>
          <h1>PRESENTS</h1>
          <img style={{width: '100%', height: 'auto'}}className="xenia-logo" src={Xenia_Logo} alt="Xenia'24 logo" title="Xenia 2024" />
        </div>
        <h2 className="animated-text">
        <span className="fade-in">BRIDGING</span>
        <span className="fade-in">IMAGINATION</span>
        <span className="fade-in">&</span>
        <span className="fade-in">REALITY</span>
      </h2>
        
      </header>
    </div>
  );
}

export default Homepage;


