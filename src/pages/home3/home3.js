import "./home3.css";
import HomepageBottomEarth from "../../assets/images/background/homepage-earth-background.jpg";
import ethereum from "../../assets/images/ethereum-block-floating.png";
import binance from "../../assets/images/binance-block-floating.png";
import chain_icon from "../../assets/images/chain-block-floating.png";
import binance_stack from "../../assets/images/binance-stack-block-floating.png";
import coin from "../../assets/images/coin.png";

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
        {
            "A": "740 120",
            "B": "741 500",
        },
        {
            "A": "820 80",
            "B": "821 360",
        },
        {
            "A": "900 120",
            "B": "901 500",
        },
        {
            "A": "980 80",
            "B": "981 360",
        },
        {
            "A": "1060 120",
            "B": "1061 500",
        },
    ]

    let PolylineTags = []
    for (let i = 0; i < endpointsOfPolyline.length; i++) {
        PolylineTags.push(<polyline key={"Line no. " + (i + 1)} points={`${Object.values(endpointsOfPolyline[i]).toString()}`} />)
    }

    const icons = [ethereum, binance, chain_icon, binance_stack]
    const floatingIcons = []

    for (let i = 0; i < endpointsOfPolyline.length; i++) {
        const upperPointOfLine = endpointsOfPolyline[i].A.split(" ")
        floatingIcons.push(<image key={i} x={upperPointOfLine[0] - 35} y={upperPointOfLine[1] - 55} href={coin}></image>)
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
                        {floatingIcons}
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default Homepage;