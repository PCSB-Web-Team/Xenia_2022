import "./home4.css";
import BlockchainHole from "../../assets/images/blockchain_black_hole-rotated.jpg"
import Hand from "../../assets/images/hand.png";
import Xenia_Logo from "../../assets/images/xeniaLogoLight.png";
import block1 from "../../assets/images/Block_x2_Left_shadow.png";
import block2 from "../../assets/images/Block_x2_Right_shadowless.png";
import block3 from "../../assets/images/Block_x3_Left_shadow.png";
import block4 from "../../assets/images/Block_x3_Right_shadowless.png";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

function Homepage() {
  const blocks = [block1, block2, block3, block4];
  const animationPoints = [
    {
      x: "463;440;420;400;375;350;320;300;280",
      y: "-10;30;55;70;90;120;135;155;180;200",
    },
    {
      x: "360;330;305;285;250;225;200;",
      y: "-40;20;35;50;65;80;100;120;",
    },
    {
      x: "560;615;660;680;705;740;775;800",
      y: "0;30;45;65;80;105;125;150;170",
    },
    // {
    //   x: "",
    //   y: "",
    // },
    // {
    //   x: "",
    //   y: "",
    // },
    // {
    //   x: "",
    //   y: "",
    // },
  ]

  const floatingIcons = []

  for (let i = 0; i < animationPoints.length; i++) {
    floatingIcons.push(
      <image key={i} id={i} x={animationPoints[i].x.split(";")[0]} y={animationPoints[i].y.split(";")[0]} href={blocks[Math.floor(Math.random() * blocks.length)]} style={{ MozAnimationDuration: `${8 + i}s` }} >
        <animate attributeName="x" values={animationPoints[i].x} dur={`${8 + i}s`} repeatCount="indefinite" />
        <animate attributeName="y" values={animationPoints[i].y} dur={`${8 + i}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;1;1;1;.6;.7;.5;0" dur={`${8 + i}s`} repeatCount="indefinite" />
        <animate attributeName="width" values="1;5;10;20;30;45;60;90;105" dur={`${8 + i}s`} repeatCount="indefinite" />
        <animate attributeName="height" values="1;5;10;20;30;45;60;90;105" dur={`${8 + i}s`} repeatCount="indefinite" />
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
              src={BlockchainHole}
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
              className="homepage-background-img hand"
              src={Hand}
              alt="homepage-background"
            />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
      <header className="homepage-contents">
        <img className="xenia-logo" src={Xenia_Logo} alt="Xenia'22 logo" />
        <h2>
          <span>WHERE</span>
          <span>PASSION</span>
          <span>MEETS</span>
          <span>PERFECTION</span>
        </h2>
      </header>
    </div>
  );
}

export default Homepage;
