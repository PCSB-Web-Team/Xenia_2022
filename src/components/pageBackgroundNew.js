import "./pageBackground.css";

function PageBackground({ children }) {
    return (
        <div>
            {/* <canvas className="orb-canvas"></canvas> */}
            <div class="aurora"></div>
            {children}
        </div>
    )
}

export default PageBackground;