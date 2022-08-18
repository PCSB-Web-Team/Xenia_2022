import "./home3.css";
import HomepageTopGradient from "../../assets/images/background/gradient-bg-1.png";
import HomepageBottomEarth from "../../assets/images/background/homepage-earth-background.jpg";
import coin1 from "../../assets/images/coin 1.png";
import coin2 from "../../assets/images/coin 2.png";
import coin3 from "../../assets/images/coin 3.png";
import coin4 from "../../assets/images/coin 4.png";
import coin5 from "../../assets/images/coin 5.png";
import coin6 from "../../assets/images/coin 6.png";
import coin7 from "../../assets/images/coin 7.png";
import coin8 from "../../assets/images/coin 8.png";
import coin9 from "../../assets/images/coin 9.png";
import coin10 from "../../assets/images/coin 10.png";
import coin11 from "../../assets/images/coin 11.png";
import coin12 from "../../assets/images/coin 12.png";
import coin13 from "../../assets/images/coin 13.png";

function Homepage() {

    /*
     * Co-ordinate system is: X-axis(Horizontally) & Y-axis(Vertically) in Top-Left corner of block
    */
    const endpointsOfPolyline = [
        {
            "A": "100 80",
            "B": "101 280",
        },
        {
            "A": "180 80",
            "B": "181 360",
        },
        {
            "A": "260 120",
            "B": "261 340",
        },
        {
            "A": "340 80",
            "B": "341 360",
        },
        {
            "A": "420 120",
            "B": "421 500",
        },
        {
            "A": "500 80",
            "B": "501 360",
        },
        {
            "A": "580 120",
            "B": "581 500",
        },
        {
            "A": "660 80",
            "B": "661 360",
        },
    ]

    let PolylineTags = []
    for (let i = 0; i < endpointsOfPolyline.length; i++) {
        PolylineTags.push(<polyline key={"Line no. " + (i + 1)} points={`${Object.values(endpointsOfPolyline[i]).toString()}`} />)
    }

    const icons = [coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13]
    const floatingIcons = []

    for (let i = 0; i < endpointsOfPolyline.length; i++) {
        const upperPointOfLine = endpointsOfPolyline[i].A.split(" ")
        floatingIcons.push(<image key={i} x={upperPointOfLine[0] - 35} y={upperPointOfLine[1] - 55} href={icons[Math.floor((Math.random() * icons.length))]}></image>)
    }

    return (
        <div className="homepage">
            <div className="homepage-background-container">
                <img className="homepage-background-img gradient" src={HomepageTopGradient} alt="homepage-gradient" />
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
                        {floatingIcons}
                    </svg>
                </div>
                <img className="homepage-background-img earth" src={HomepageBottomEarth} alt="homepage-background" />

            </div>
        </div>
    )
}

export default Homepage;