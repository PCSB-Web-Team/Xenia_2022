// import React, { useEffect } from "react";
// import createClass from "create-react-class";
// import "./cube.css";

// var Iframe = createClass({
//   render: function () {
//     return (
//       <div>
//         <iframe
//           src={this.props.src}
//           height={this.props.height}
//           width={this.props.width}
//         />
//       </div>
//     );
//   },
// });

// const Cube = () => {

//     const movecube = (e, cubeDiv) => {
//         e.preventDefault();
//         const motionX = (window.innerWidth - e.pageX) / 80;
//         const motionY = (window.innerHeight - e.pageY) / 80;
//         cubeDiv.style.left = -motionX + "px";
//         cubeDiv.style.top = -motionY + "px";
//     }

//     useEffect(() => {
//         const cubeContainer = document.querySelector(".cube-container");
//         const cubeDiv = cubeContainer.querySelector("div");
//         window.addEventListener("mousemove", (e) => movecube(e,cubeDiv));
//     },[]);

//   return (
//     <div className="cube-container" id="cube-container">
//       <Iframe src="https://sd5ptr.csb.app/" width="100%" height="100%" />
//     </div>
//   );
// };

// export default Cube;
