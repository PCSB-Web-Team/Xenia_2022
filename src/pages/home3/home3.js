import "./home3.css";
import HomepageBottomEarth from "../../assets/images/background/homepage-earth-background.jpg";

function Homepage() {

    /*
     * Co-ordinate system is: X-axis(Horizontally) & Y-axis(Vertically) in Top-Left corner of block
    */
    const endpointsOfPolyline = [
        {
            "A": "100 120",
            "B": "101 500",
        },
    ]

    let PolylineTags = []
    for (let i = 0; i < endpointsOfPolyline.length; i++) {
        PolylineTags.push(<polyline key={"Line no. " + (i + 1)} points={`${Object.values(endpointsOfPolyline[i]).toString()}`} />)
    }

    return (
        <div className="homepage">
            <div className="homepage-background-container">
                <img className="homepage-background-img" src={HomepageBottomEarth} alt="homepage-background" />
                <div className="vertical-lines-container">
                    <svg className="lines-svg" preserveAspectRatio="xMinYMin">
                        <defs>
                            <linearGradient id="linearGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                                <stop offset="0%" stopColor="#009FFD
" stopOpacity="1">
                                    <animate attributeName="stopColor" values="lightblue;darkblue;lightblue" dur="7s" repeatCount="indefinite" />
                                    <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
                                </stop>
                                <stop offset="100%" stopColor="
#2A2AC6" stopOpacity="1">
                                    <animate attributeName="stopColor" values="lightblue;darkblue;lightblue" dur="7s" repeatCount="indefinite" />
                                    <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
                                </stop>
                            </linearGradient>
                        </defs>
                        {PolylineTags}
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default Homepage;