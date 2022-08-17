import "./pageBackground.css";

function PageBackground({ children }) {
    return (
        <div>
            {children}
            <div className="pageBackground">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default PageBackground;