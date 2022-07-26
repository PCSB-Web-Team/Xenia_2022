import React from "react";
import "./Home.css";
import hex_2xblock_left from "../../Assets/Images/Block_x2_Left_shadow.png";
import hex_2xblock_right from "../../Assets/Images/Block_x2_Right_shadowless.png";
import hex_3xblock_left from "../../Assets/Images/Block_x3_Left_shadow.png";
import hex_3xblock_right from "../../Assets/Images/Block_x3_Right_shadowless.png";
import ethereum from "../../Assets/Images/ethereum-block-floating.png";
import binance from "../../Assets/Images/binance-block-floating.png";
import chain_icon from "../../Assets/Images/chain-block-floating.png";
import binance_stack from "../../Assets/Images/binance-stack-block-floating.png";

function Homepage() {

    let ThreexBlocksOnLeftWithShadow = []
    let ThreexBlocksOnRightWithoutShadow = []
    let TwoxBlocksOnLeftWithShadow = []
    let TwoxBlocksOnRightWithoutShadow = []

    /** Lines starting from central blocks
     * Co-ordinate system is: X-axis(Horizontally) & Y-axis(Vertically) in Top-Left corner of block
    */
    let EndpointsOfPolyline = [
        {
            "A": "295 275",
            "B": "260 300",
            "C": "245 290",
            "D": "215 310"
        } /*I1(B)*/,
        {
            "A": "290 245",
            "B": "250 220",
            "C": "280 200",
            "D": "250 175"
        } /*I1(A)*/,
        {
            "A": "335 245",
            "B": "355 230",
            "C": "340 220",
            "D": "372 195"
        },
        {
            "A": "330 275",
            "B": "397 323",
            "C": "420 305"
        } /*I2(A)*/,
        {
            "A": "397 323",
            "B": "380 338",
            "C": "398 353",
            "D": "380 367"
        },
        {
            "A": "495 400",
            "B": "535 370",
            "C": "450 305"
        },
        {
            "A": "460 280",
            "B": "490 260",
            "C": "540 295"
        } /*I2(B)*/,
        {
            "A": "340 395",
            "B": "300 420",
            "C": "395 480",
            "D": "470 425"
        },
        {
            "A": "250 220",
            "B": "183 258",
            "C": "100 203"
        },
        {
            "A": "260 300",
            "B": "300 330",
            "C": "337 307",
            "D": "380 338"
        },
        {
            "A": "300 330",
            "B": "220 385",
            "C": "237 397",
            "D": "210 417"
        },
        {
            "A": "160 420",
            "B": "80 365",
            "C": "40 390"
        },
        {
            "A": "80 295",
            "B": "222 385"
        },
        {
            "A": "55 185",
            "B": "5 153"
        },
        {
            "A": "50 300",
            "B": "15 322",
            "C": "55 350",
            "D": "25 368"
        } /*I3(D)*/,
        {
            "A": "73 205",
            "B": "15 245",
            "C": "50 270"
        } /*I3(C)*/,
        {
            "A": "183 122",
            "B": "105 170"
        } /*I3(B)*/,
        {
            "A": "183 122",
            "B": "135 95"
        } /*I3(A)*/,
        {
            "A": "400 200",
            "B": "472 248",
            "C": "502 227"
        },
        {
            "A": "290 75",
            "B": "335 105",
            "C": "260 150"
        } /*I4(C)*/,
        {
            "A": "335 105",
            "B": "380 135",
            "C": "420 110"
        } /*I4(B)*/,
        {
            "A": "380 135",
            "B": "420 162",
            "C": "410 170"
        },
        {
            "A": "450 110",
            "B": "560 180",
            "C": "537 198"
        } /*I4(A)*/,
        {
            "A": "405 85",
            "B": "315 25"
        },
        {
            "A": "218 145",
            "B": "183 122",
            "C": "262 78"
        },
        {
            "A": "252 60",
            "B": "220 40",
            "C": "295 0"
        } /*I4(D)*/
    ]
    let PolylineTags = []
    for (let i = 0; i < 26; i++) {
        PolylineTags.push(<polyline key={"Line no. " + (i + 1)} points={`${Object.values(EndpointsOfPolyline[i]).toString()}`} />)
    }

    let IconsAlongBlockLines = [ethereum, binance, chain_icon, binance_stack]
    let AnimatedIconsAlongBlockLines = []
    /*For adjusting the x-y values of animated icons subtract 40 and 60 from x-y-coordinates resp. of polyline*/
    let AnimationPointsForIcons = [
        {
            x: "220;240;210;250;240;230;255;245;220;205;175",
            y: "125;150;170;195;205;215;225;230;250;240;260"
        },
        {
            x: "290;357;380;390;410;450;500",
            y: "215;263;245;235;220;200;235"
        },
        {
            x: "95;143;143;75;33;23;-25;10;10;5;-25;15;-15",
            y: "35;65;62;110;145;155;185;210;240;250;262;290;308"
        },
        {
            x: "497;505;520;410;400;380;340;295;250;240;212;180;255",
            y: "138;128;120;50;40;60;75;45;15;5;0;-20;-60"
        }
    ]

    for (let i = 0; i < 4; i++) {
        ThreexBlocksOnRightWithoutShadow.push(<img key={"3x block right no." + (i + 1)} src={hex_3xblock_right} alt="3x block right" />)
        ThreexBlocksOnLeftWithShadow.push(<img key={"3x block left no." + (i + 1)} src={hex_3xblock_left} alt="3x block left" />)
        AnimatedIconsAlongBlockLines.push(<image key={IconsAlongBlockLines[i].toString().split("/")[3]} x="0" y="0" href={IconsAlongBlockLines[i]}>
            <animate attributeName="x" values={AnimationPointsForIcons[i].x} dur={`${8 + i}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={AnimationPointsForIcons[i].y} dur={`${8 + i}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;.5;1;1;1;1;1;1;.5;0" dur={`${8 + i}s`} repeatCount="indefinite" />
        </image>)
    }

    for (let i = 0; i < 3; i++) {
        TwoxBlocksOnRightWithoutShadow.push(<img key={"2x block right no." + (i + 1)} src={hex_2xblock_right} alt="2x block right" />)
        TwoxBlocksOnLeftWithShadow.push(<img key={"2x block left no." + (i + 1)} src={hex_2xblock_left} alt="2x block left" />)
    }

    return (
        <div className="homepage-container">
            <header className="homepage-sliding-title-container">
                <div id="div1" className="homepage-title-marquee">XENIA</div>
                <div id="div2" className="homepage-title-marquee">XENIA</div>
            </header>
            <svg className="homepage-container-background"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="1700"
                height="783"
                fill="none"
                viewBox="0 0 1700 783"
            >
                <path d="M0 0H1700V783H0z"></path>
                <rect
                    width="64"
                    height="64"
                    x="1358"
                    y="144"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1358"
                    y="72"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1430"
                    y="144"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1502"
                    y="144"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1574"
                    y="72"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1502"
                    y="216"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1502"
                    y="288"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1430"
                    y="360"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1358"
                    y="360"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1286"
                    y="432"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1430"
                    y="432"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1430"
                    y="504"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1502"
                    y="576"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1430"
                    y="647"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1358"
                    y="576"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1574"
                    y="576"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1502"
                    y="432"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1574"
                    y="504"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="1574"
                    y="288"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="72"
                    y="144"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="144"
                    y="72"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="216"
                    y="144"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="144"
                    y="288"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="288"
                    y="144"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="144"
                    y="216"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="72"
                    y="288"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="216"
                    y="360"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="144"
                    y="360"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="72"
                    y="432"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="216"
                    y="432"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="216"
                    y="504"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="216"
                    y="576"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="144"
                    y="647"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="144"
                    y="576"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="360"
                    y="432"
                    fill="#fff"
                    fillOpacity="0.25"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="288"
                    y="504"
                    fill="#fff"
                    fillOpacity="0.1"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="72"
                    y="647"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <rect
                    width="64"
                    height="64"
                    x="72"
                    y="504"
                    fill="#fff"
                    fillOpacity="0.15"
                    rx="8"
                ></rect>
                <path
                    fill="#7C51F5"
                    d="M232 328a8 8 0 018-8h72a8 8 0 018 8v72a8 8 0 01-8 8h-72a8 8 0 01-8-8v-72z"
                ></path>
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M259.363 353.151l30.655-.151-7.339 11.061 17.321-.084-7.341 10.876-30.853.197 7.455-10.983L252 364.06l7.363-10.909z"
                    clipRule="evenodd"
                ></path>
                <rect width="88" height="88" x="80" y="400" fill="#F6D900" rx="8"></rect>
                <mask
                    id="mask0"
                    width="46"
                    height="48"
                    x="103"
                    y="420"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill="#C4C4C4" d="M103 420H149V468H103z"></path>
                </mask>
                <g mask="url(#mask0)">
                    <path
                        fill="url(#pattern0)"
                        d="M80.236 321.031H327.659V568.454H80.236z"
                    ></path>
                </g>
                <rect
                    width="88"
                    height="88"
                    x="112"
                    y="184"
                    fill="url(#paint0_linear)"
                    rx="8"
                ></rect>
                <path
                    fill="#fff"
                    d="M161.656 232.114L149.776 211H142v37.206h8.478v-21.384l12.204 21.384h7.452V211h-8.478v21.114z"
                ></path>
                <rect
                    width="88"
                    height="88"
                    x="1438"
                    y="328"
                    fill="#5847CC"
                    rx="8"
                ></rect>
                <rect
                    width="88"
                    height="88"
                    x="1366"
                    y="544"
                    fill="#00D395"
                    rx="8"
                ></rect>
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M1394.73 599.513a3.592 3.592 0 01-1.73-3.074v-6.994c0-.268.07-.526.21-.755a1.491 1.491 0 012.05-.54l15.79 9.202a3.01 3.01 0 011.49 2.596v7.247c0 .329-.09.659-.27.941a1.802 1.802 0 01-2.48.598l-15.06-9.221zm23.52-13.28c.93.54 1.5 1.525 1.5 2.595v14.705c0 .435-.24.836-.62 1.047l-3.45 1.945a.632.632 0 01-.14.058v-8.165c0-1.057-.56-2.037-1.46-2.582l-13.87-8.293v-9.217c0-.268.08-.526.21-.755a1.497 1.497 0 012.05-.541l15.78 9.203zm6.91-10.861a3 3 0 011.5 2.6v21.479c0 .439-.25.845-.63 1.056l-3.28 1.769v-14.953c0-1.057-.55-2.032-1.45-2.577l-14.17-8.5v-8.743a1.5 1.5 0 012.25-1.3l15.78 9.169z"
                    clipRule="evenodd"
                ></path>
                <path fill="url(#pattern1)" d="M1462 352H1503V392H1462z"></path>
                <rect
                    width="88"
                    height="88"
                    x="1582"
                    y="472"
                    fill="#245BCA"
                    rx="8"
                ></rect>
                <path fill="url(#pattern2)" d="M1602 492H1650V540H1602z"></path>
                <defs>
                    <pattern id="pattern0"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                    >
                        <use transform="scale(.002)" xlinkHref="#image0"></use>
                    </pattern>
                    <pattern id="pattern1"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                    >
                        <use
                            transform="matrix(.00352 0 0 .00363 .017 -.03)"
                            xlinkHref="#image1"
                        ></use>
                    </pattern>
                    <pattern id="pattern2"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                    >
                        <use transform="scale(.0039)" xlinkHref="#image2"></use>
                    </pattern>
                    <linearGradient id="paint0_linear"
                        x1="112"
                        x2="200"
                        y1="184"
                        y2="272"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#70F4CE"></stop>
                        <stop offset="1" stopColor="#61D8F8"></stop>
                    </linearGradient>
                    <image id="image0"
                        width="500"
                        height="500"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAgAElEQVR4Xu3dCZwcVbn38eepqp4lk5UECKCoICLbRa8oiLiENYQEWUNCICRhCbmsAa4B5NW44gaCEkhYAoQtBkSW3JgQEJRFVASVRZRF2QkJWWfpma7q835OzyQGyExXV/fM9Jz69eflc997U1Vdz/c50/+u6qpTKrwQQAABBBBAoM8LaJ+vgAIQQAABBBBAQAh0BgECCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoDvQREpAAAEEEECAQGcMIIAAAggg4IAAge5AEykBAQQQQAABAp0xgAACCCCAgAMCBLoDTaQEBBBAAAEECHTGAAIIIIAAAg4IEOgONJESEEAAAQQQINAZAwgggAACCDggQKA70ERKQAABBBBAgEBnDCCAAAIIIOCAAIHuQBMpAQEEEEAAAQKdMYAAAggggIADAgS6A02kBAQQQAABBAh0xgACCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoDvQREpAAAEEEECAQGcMIIAAAggg4IAAge5AEykBAQQQQAABAp0xgAACCCCAgAMCBLoDTaQEBBBAAAEECHTGAAIIIIAAAg4IEOgONJESEEAAAQQQINAZAwgggAACCDggQKA70ERKQAABBBBAgEBnDCCAAAIIIOCAAIHuQBMpAQEEEEAAAQKdMYAAAggggIADAgS6A02kBAQQQAABBAh0xgACCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoDvQREpAAAEEEECAQGcMIIAAAggg4IAAge5AEykBAQQQQAABAp0xgAACCCCAgAMCBLoDTaQEBBBAAAEECHTGAAIIIIAAAg4IEOgONJESEEAAAQQQINAZAwgggAACCDggQKA70ERKQAABBBBAgEBnDCCAAAIIIOCAAIHuQBMpAQEEEEAAAQKdMYAAAggggIADAgS6A02kBAQQQAABBAh0xgACCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoDvQREpAAAEEEECAQGcMIIAAAggg4IAAge5AEykBAQQQQAABAp0xgAACCCCAgAMCBLoDTaQEBBBAAAEECHTGAAIIIIAAAg4IEOgONJESEEAAAQQQINAZAwgggAACCDggQKA70ERKQAABBBBAgEBnDCCAAAIIIOCAAIHuQBMpAQEEEEAAAQKdMYAAAggggIADAgS6A02kBAQQQAABBAh0xgACCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoDvQREpAAAEEEECAQGcMIIAAAggg4IAAge5AEykBAQQQQAABAp0xgAACCCCAgAMCBLoDTaQEBBBAAAEECHTGAAIIIIAAAg4IEOgONJESEEAAAQQQINAZAwgggAACCDggQKA70ERKQAABBBBAgEBnDCCAAAIIIOCAAIHuQBMpAQEEEEAAAQKdMYAAAggggIADAgS6A02kBAQQQAABBAh0xgACCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoDvQREpAAAEEEECAQGcMIIAAAggg4IAAge5AEykBAQQQQAABAp0xgAACCCCAgAMCBLoDTaQEBBBAAAEECHTGAAIIIIAAAg4IEOgONJESEEAAAQQQINAZAwgggAACCDggQKA70ERKQAABBBBAgEBnDCCAAAIIIOCAAIHuQBMpAQEEEEAAAQKdMYAAAggggIADAgS6A02kBAQQQAABBAh0xgACCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoDvQREpAAAEEEECAQGcMIIAAAggg4IAAge5AEykBAQQQQAABAp0xgAACCCCAgAMCBLoDTaQEBBBAAAEECHTGAAIIIIAAAg4IEOgONJESEEAAAQQQINAZAwgggAACCDggQKA70ERKQAABBBBAgEBnDCCAAAIIIOCAAIHuQBMpAQEEEEAAAQKdMYAAAggggIADAgS6A02kBAQQQAABBAh0xgACCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoDvQREpAAAEEEECAQGcMIIAAAggg4IAAge5AEykBAQQQQAABAp0xgAACCCCAgAMCBLoDTaQEBBBAAAEECHTGAAIIIIAAAg4IEOgONJESEEAAAQQQINAZAwgggAACCDggQKA70ERKQAABBBBAgEBnDCCAAAIIIOCAAIHuQBMpAQEEEEAAAQKdMYAAAggggIADAgS6A02kBAQQQAABBAh0xgACCCCAAAIOCBDoDjSREhBAAAEEECDQGQMIIIAAAgg4IECgO9BESkAAAQQQQIBAZwwggAACCCDggACB7kATKQEBBBBAAAECnTGAAAIIIICAAwIEugNNpAQEEEAAAQQIdMYAAggggAACDggQ6A40kRIQQAABBBAg0BkDCCCAAAIIOCBAoPdgE40JjxbRHUSkUcSs6/ifb4oE/xKRJhGJRCRn/1PVfA/uGm+FAAIIINDHBQj0MhpojGkQkbyqtsTZjMmHt4vKkSLyXncjRlTeFpF/SV6eE08eE8k/KZJZKSKrVLUxzvZZBgEEEEAgvQIEeom9N8b0F5FtRaKdRMznRPRR1eCeOJvpNNA/sLJti7H/7yVR+bWI3Cfi/1NEXldVeyTPCwEEEEAAgfcIEOgxB4QxZhuRcDfJy0HiySgR7xNiTJuonq3qXxVnM/EDfeOtbWjR0yL5+0TkfpHgSVV9J857sgwCCCCAQDoECPQifTamdRcRb4KId7CI2V1EtXD03P5aI6IzVP05cYZLskB/f7gb+9v6E5I3j4gXzFbVF+K8N8sggAACCLgtQKB30l9jzIdFwrNEvANFzM4i6m8U5L0U6OvftuOUvOhfRORXIt4sVX3X7aFKdQgggAACXQkQ6O/TMcb4IvmpYvKnieonRDTYRJD3cqC/J9izIvoPEZkt4l2jqvZKeV4IIIAAAikTINA7Gt4e5LnPivG+Lyp7iki/GGOhh0+5d7lHzWLkt6L+eSLyPLe9xegeiyCAAAIOCRDo9nrywpXr4XkieoaIbFZCf6sp0Nfv9tsierGId6OqrimhFhZFAAEEEOjDAqkPdGPMDiLR+SIyJUEfqzHQ15dxt4j/P6r6ZoK6WAUBBBBAoI8JpDrQjcl9SUS/I6Jf6uJ38q5aWmqg3yuqo3tujJjfiZhviQSPqGpbz70v74QAAggg0NMCqQ10Y8JDReRSEd0+YZjbXpUW6CaaJnnz3x+YKa67uu7Z6wD09yLeXCak6S5ktosAAghUh0AqA92Y6EIRY0+zDyizDY0ier6qP6vM7bA6AggggAACZQmkLtCNyX1LjJ4nGusq9q5xjf5ZNH+2auaRsrrAyhURePDBHw1fvrxh+NZvRwOa6uoG1Xgt/aW/yMpsft2AlrrVq4fmmwb/q/GdA2fM4LqCioizEQQQqCaBVAW6MdHXRcyFMW9J66xP9lEqj4vKLBH/ARF5V1XtE9J49axAsOgXV+3Zb13mc/mGaPfWfG4X8eu3DEQyIuK3/xfa/ykigb03v/BfqGEY5Py1fiAvtIYtf8+sC56R2trf7z9lin3i3YYpACtcSr9bb71124bVq2uM78d+D40izXz0o01bbLHFq3vssUenY2zu3LnbbZbLNeSN8VoHtXkb77tqpG1t5j3/tyjK6xZvtXnN+by/1Ve+8vQ+++xjn/zXK6958+Y1bBGGn89EUUWfLrh2WDav79S0rPD9JmNM0/Dhw5eNGTNm/UOUYvegO1EWXHbZjtrYOLSf51XN3BFRPq9N/fqFuWHD/j5x4sROnxuxaM6c7etraj6cD8P3jK1yvbL9WsN3o7bmIBje+N/vvrs22nffFbvsssv6sV8VfSu3xu5cPxWBboz9QIsOEyPzRMU+IS3Jq1WMPCUq3xXxHxKRZlVlgCWRTLjOEzNmDHp9u2GfzDTUf7VG9HAJ6j4iEgYigQ3uJB8s9oPUpn5bJPKEJ3Lf2rdeWrzrmpqXd5g504ZcRfp715w5ezYMknkiwYdKKd0LAmmLWh5vDtaccOSRM17vbN3FN1+x2A/qv1jKtu2yXhDou/nGA8eOPa3XzjA9vujmnZuaoyfyYVjq7sdZfn3/jAkkp2H2bRPov9qi3LO6tu2RpkEfeerTzz23eoeZM9c/ujjONiu1jC66Zc7ttbV1o/JhWJFxVqkdEw3XSH7gIQeMH/9UZ9tcePO1362V6AwJAvsFutIv61H4LzTSmtHw9ZwJ/lEfmb80afbRZa39/h4EQfPEiRObK/U3WukCemt7KQn03AgRvU5EPpYI2sjbonqpiHcVjzJNJFjWSg/OmjV83dDWPevDhpkSBJ8qa2PFVg5D8eszv13r568e2jbwkS+OHftWxzPqi63Z6b/fOXv25+sHZ34RiHy4lI0UAj3MPrbaNI4bP/7c1zpbd+lNsx6STN2XS9l2R6DL263rvjxhwum/K3XdSi3/6MJ5u2az5uluCvQiuxnmwtB/KgqDG6IhuUejaOgbRxxxRE9NoayL5l93T20QjO6d2ruiCVfno/77HzRhwp87/RJ5w5wf+nUyXaRbAr1Y39bkIrm/1Zi7vAHR4zs+37jskzNm9NpZpkr9LVRiO84HujHmkyLRDSK6Z4IDrkiMLBE1P1LN/LYS4GwjvoAN8sbN5MtemJ9Wn+n35Z48L+kHKlE2/1xzru2GgVJ/+4jJk/8df8/fuySB3rlc7wZ6+361f3EybUGoC1uCaN6Ob65+Ysdzznkjab9jrkegx4Ta1GK2Z/aVz4Xv5jNNC4Jc3c3Pfiz7zJl7nbm2jM32+VWdDvTCDHD56GrxdHyCMG+RvLlavOBbqrqqz3e6jxVw/4LZn8/5+elBrvZo+8fbW0cx9r0jiR5qC/NzHvnLjkt+8IMvljwWCPTqDvT1e7fROFuYW/7WzauHbvfAscceu6Kb/nQI9ArBFr6QZXMrgyD6hdT2W3DA4cc/3HHNTIXeoe9sxu1Aj3IXi6f29rRSXy+KyHmqwd2lrsjy5QnccccdO9SF686ulfw4Lwg2660g37iK9R/0oYSPabZ2zshJk+aVUiWB3jcC/YPBHv4hNLlbDx5/+s+74bdaAr2UP6IYy9YUzrSEa7OaeyAjLVeOPGb6/TFWc2oRZwPdmNx+YvROURlYWsfMcyJyqmrGfsvj1YMCC6+9dtfaBr1aVD5vr3LryVPsccq0p+FbQ7NCwuZrR979u2/q7bfHmn2PQO9bgb5+b22/QzGNRjI3mf4t3xk5cqq9nqJSLwK9UpLv207h57LQ/Cusabv6jK+d+tMXX9TWbnqrqtusk4FujKkTiewtZXuXKP6iiJlCmJeoVoHFb7nssi9tMXyAPRL6rwpsrrs30dYa5hbK4FX/O3r0BS8XezMCvW8Gut3rji+WkUj4dGNL8/TDJ0+3d7hU4kWgV0Kxk2103K/a0qrhUh0kp1b4y1g37nl5m3Y00KMZ7XOYS20JPDbMp6pmflPCOptctP02uQ33Qw8QCXdqn2JW7dmCJLdXlbtLxdY3Ivm/qmbsl6Cefnm/vv2SIyU/+IrAyBY9/eZlvF++SeRHh4078YJi2yDQ+26gb7znWZEVmajtnJETpt1mb3cs1vci/06glwkYZ3UvCEykTb/zc/lz9ht3ur0Nr7puEYxTRAnLOBfoxpidxUT3iMr2JTisETFHqWbK+s3FGGMDe3OR/AFizGEispuo/d8LX/Sr3No8LxLspao9epXo7bdfefTgqNb+Jl1XQr96f9EwXBy8+Nb4ETNnri62MwS6G4FuqwhDk/Vro++vNkN+Mnbs2PUT1RQbApv6dwI9iVrSdULzasuqllMPPeOMXyfdRF9Yr8pDpjRCY4wv+egK8eTkjhCNs4FQ8uYy9TP/G2fhTS1jjBkuEtmJPezkNYeKav8++EUwK6IzVf0fJnUodb3Fc+fu7/fL3S4SDC513d5cPp/NPz1oTfORe5111gtx9oNAdyfQbSUmCFqjXP4HL69s/slpp53WGGcMbGIZAj0hXPLVwuXZhuC4MWNOvC/5Nqp7TccCvW0vMd4torJdbHYjS0X941V1Wex1OhYsfIGQcC8RnSEiY9oPwvvwGR2jT4t6+6pqd92qs4H4lp/85DNbDB98uwSabLKfUptVueVXtK5qO270tGlL4m6SQHcr0Dt+V29uWtf8ncNOPuPHCa/fJNDj/gFVcLlQ5LW1q94Yf8y0bzxawc1WzaacCfSOo/MbxJPjYusafUbUO0xVX4q9zoYwb9tdjHeRqBwgooP6dJD/p/g2EfNz1cx5pXqUsvxdc769W03D1rdmAt21lPXiLrt+0olNLa9hWM7V880tq9omHjpt2i/j7otdjkDvvkC34Wo6Jhl5/7uonUGgm2ZVbZ+fQJq1teX4Ayacemcp46Fj2bICvasxnmBf3rNKPgyzLS3elw6dPPlPnW1rcZkzxXXj32jx8kPzcm1DZvyXDj/hj8UX7ltLuBToHxOJ7hPRj8cKVyOhqJyiGlxfasuMyX1RxLtcRD4d671KfYPeXL5wlB6OV619tjt2Y9GiRbW65rU5fiY4XsPKXSBoPyDs3FFtLbnlRqMXosBfHhjvXQlza7Smtiaby25VK8FmYaDDA/E/6QUqpXzg29Dw1qz5+v4nnvkDO0FVKTYEevcEehjmIr/OeybKtf0l1MyGOcUDX2sk8ofWSjg0CmVLCYItu2Nyoo5tPh94A8aPGDv2L6WMCXtNTRlTvxoTtP42yuVf2bjuEt9/k4urUa1TrylaZ75/0Mkn2wcWbfJVbqCLNN0VSk1TKNqeQaEvQZBvEPGHBRIOE5HhfpAZZMTvlkmlwjB33/Iljx4/8aab3qmEW7Vsw6FAD48U0fn2+3osXCOPifr7qWo21vIdCxkT2t/JfywqHy9lvT6zrJFWUf1/qr49lVjx17233XBanUb2d/qkD8l5zz61T9sZvi0tbUu8dbmFZuDAvw/IvN7oN2+ZXbHVirZXXhmYO3D5cu/+LbesGzy4uTaTaaira2kYXqvZL4no/hKovbWxpqtC7VFgs8h1w/+9+7l7nL/HmlJRCPTuCXQRybaG5pLmmtcvDYLWDZ9lq1fv4A0atLy2fsXgWq92VV0m529pBgwcZUL/YD/QnSs5v4Edf14Y3b6q5oVpRxxxcSnzwCcO9NDOeKp6XFZfXbJx3aWOy00tn822aRDsmT/6uefW6syZnV7JX26gt/ZfuVtb28qN7uv/rGz97rvBq4MG1XreytrMO/n65ky007ABelAo9fvXBIF9slslSmz//hCaSMN1l4ycNN3+XOrMy4lAN8YMFYkuEdETYh4x50XMIaqZxaV00phwsoh92ppsXcp6fWtZFTHmblH/SFWt5GefPHj99R/N1rfdUxPU7VaBP04TSviWqly+Kt9426uvhqtnlPCAhmefXVDzj38EA0Se+VDDigHTvIEDT9jUlfaFo7CW3CLNeWfsP2VK0XvON9VrAr37Aj0MzbcPPu6ki4v9jS1YsKB+2zVrBq4arLsGkdpbDUdU6hZSP4hysjp76r4nnXlDCWdvygr0mtZg9H4nnNBrV2yXG+jBlt5WI0ZMfrtY32bNmtV/++2DAS2rg6MGhOYcE+hHKnXHUKjh67Umc/q+46Y4MyOoI4He9mkRb5E9TVNsgHT8+50ihQvh7OP3Yr2MydnfyuckfmJbrHepmoVeEvFHqeo/K7hH3n3z504JArk6Ck1Z4y6UsDH0Mz/vP0x/NmLE5OUJL0raUJo55ZTMgv0+/bmBOf3fIMjsv/7sgT0ybxV5I9ev9vBDDz2u098TixkR6N0X6K05+c7o40/8frEebPzvNtzro+WHZiL/fBNkdrXP3y1l/U0uq+FbWwyu/8LuB03s9DT1+9YrK9CDrH/oAZMm/V/Z+51wA+UGerZhzYfGjCnpATjek3OfHPpW7WNTPT8zLZCg7IOq9jngW+4LB21z+JgxY2JnQUKyHlmtrA/WHtnDIm/S8azzE0R0bryjc3vUmT+wlAlkjDFbiokWiuoe8d6jGmTK3ofDVYO7yt5KxwYWzZmzvTbU3lpTp58r7+g8fKWprmn6YYed86tK7dvG27nnmmtOqa/XC/067yOt2Xyj12K+ftDJJ/+snPci0Ksr0NfvzYIFCzarzzd+q0HMyVFpk1B9oKDCle+a+8kBx5z6tZi3uhDopQX6BvMFCxZ8akh+3WwR2bOcv0u7rgmCltYwe9iYcVOduJXNhUAfIhLNEdGjY4WtkSdE/UNUNdbFEMaYesmH/08874JY2y93hFXF+nZY5C8TCS5S1aZyd+lBY4LGW+ac1K+u/qqkYd5+q1Du8ba25jMOmXjOE+XuU1fr/3rBrH2CVvmu8TJ/PnDCKeeW+14EenUGut0rOzZbb7z6e35dME1EBpTZ65VBi/eZmI/aJdATBrrt0eLFc7byGuWKKAy+GrRP3JXoVThKz2VvDIZtd9YBBxxQ8vUxid60G1dyIdA/IhL9QUS2LO5UKPd/RbyfqWqsB2sYk9u//WI7GVp8+w4tYfRJUW+cqsaaPKWryq+55potPzbAW6JBsHuSQC+c+g7Nipoge9B+405/sieUn5gxY9DLn6n3x46dubLc9yPQqzfQO/ZMf339Vd8M6mvsb+tdXiBZbCyEofzg4OOKTwdczlXu9qK4FJ5y/wD9w+c/PKTpU3+7qkbqjkl6sU/hQCEM17aafqNHH1947GqffjkQ6LkDRbwlMY+eXxGJxqjWPh2na8aYYWKim0X1oJjbj7PZvrKMvSd9hGrmsTJ3WJdce+3oYHDmniRhXnjvnFneFMjZh40/6dYy96VXVifQqz7Q7Q5m7r35im8EQf355fymHoq8sipfv0eM56hzhF7GEfr6EbVw4cVD6lZv/jMv0OOShrp97GpzKD9f3qYXTJw4sewzkr3yIbP+m2lvvnm5722MyYjkLxSRmcUDV0Xy5lbx/DNVtejtJR2/zR8horeK2PdJ26sw693xIv4tqpp4+jt733nw7huzgnr/xGSTfIQ5Vbl6q133OWeXXXaJdVal2jpFoPeJQBd7VmblbjvdpkF0cBljqHltS9NpR04uXPHe1YtAr0CgW+B58+btNLxfbqEvwXaJDxpCs+z1nL/X5MmT/11G73t91T59hF74fdtE80Xl0OKShVLPFfEuU9WiE4MYYwaLie4SlS8X37aLS9gvQPmfiBd8Q1UTP4TiiVtvHbYqWvecZAL7kJqSXyry72XRy1+ZMOF7r5S8cpWsQKD3jUC3e/l/l166h7fFgN8FgVefcPiYMMzdc/Bxp9qHMxHonQgkuMq9S8v758/5cS40ZwVBJtEdC/a39LoW76gvHH+8nfUv8QFMwjFTsdX6eqAPEInsb6pxJ3kZrRrEutXDmNZdRPy/Vepe1Yp1rGc3tFTEn6Cq9tawRK+HfvGzMTnTcE+ilUVyjS1t3z988rSZCdevitUI9L4T6PahTotvmH2FX5c5Ncng6Zjn/e/3NOuXfz5lSld/N2UdoTesbD2y8aMfjX0f+qhRo+ysLEnPSn+AohduW+uyHQ9eP/OjUf2H70p6nY4NdBOZWW0Dtjh31KhRrUl6Xw3r9PVA30IksqdIin0rs3W+2fH7uQ3pLl/G2Puk82eLmEuLLVvSv7dPN1v07EBJ2yx9YWthveL0fpmIv6eqJj46Xjx/9rd8yXyj9N0UCTV8qyWz+W5HHHFE0Z9Ikmy/p9Yh0PtUoMvDd975icbmd/4cBJn+icZIaJbVZeXkL5500r1drJ840O0RZBi2PeBlM/8yQVj058BAg7zWeffvd8wU+xz3iryqLdBtUYtvvGKGX1v/TRFJdHYlDM1zf3vj3b1KmaCqIpgV3EicD/UKvl1lN2WM2Uby4dlFT5F4NsC8V0W861W16K0JxtjpY1hswn4AACAASURBVCM7i9x+ld1juU3yJnE4VmBfjIgOEM8cJKI7FN+eHR7eTqr6fPFlN73E4huuu9evk9FJ1m812QWjx592TJJ17Y4vnffTHb1MwxDj57vtFFpOIl8HBi+NHDl1o2ks37vHBHrfCvRHHrl7QMsrb1/v1dYdmfA32dac+N8fNW7St7sp0Aub9YP4H9+t2baHDz7u1C8l/Fv6wGrVGOj3Xn75DsHQQb8JguhDieoMQxnkN277ufHnvpZo/SpYKf6IqIKd7ald6JhK1s74VO59qRvtcuHe7r1VM7/vqTo29T6F6w4kukJEpxT/qcjuc/RZ1Zqk930HS2++9kVpn66x5FdW/Cljxk0q+eE59o2effbZmreefuT7Wlt/br41V/J7x13Bnqpr0ex5o4+cekln6xDofSvQ7ZMbH5h/5STN9L82YaBLq+RuGD3uVDtVdGevco7Q4w7PDcsZ9V9/6t/L9pwxY8abJa+8iRWqMdDtbi696ZqHJOPZLy6Jsm3l2pUHHHPK/95fCaPe2EaiontjR3vyPY1p21OM94ho0VP5JexWIdD3Vc08WMJKFV/UGFMjEn5dxPtGvEDPj1TNxH7298Y7vOSaaz6WH+D9LRBJcuqyOfviW58Yc9FFbyRFWDR37s6Zeu93olG3zSFgb3lplcy5Bx51bKc/zxDofSvQ7d4umvv9nTP9tn7Il2jzUn947nhg0AOvfnz3g6fusUdn3yZ7NNBFZG2ttJz7pXGnX5v072nj9ao10B+af90ZORH7YKnaRHW2hF87YPLUbnkwVaL9KXElAn0TYMaEY+xjrGP8Nl8Cd3UEut1hYyL7M8VP4wW6OUbEvz3JrWv/93+37VGzrtl+gSk50E0gL39qWXb3LU47rbEE5Pcsah/s8JH+5vL6hgFTkh5pFXtvAr2YUNf//ujCebtms+bphP3JJpnLPc4e33bbJR8epoNv9+yjx0p8ylf7Y1Wjx5fn68Z0cT96Twd6PjThTQePnzopTv3FlqnWQL//xhtHmNrQXruQ6GmOXqCX73fUFPv52CdfBPomAz06RcRcaX+mqlxXqyrQTxGROfECXU4V8a5N8uS1X99+7X5BpPYK936lO+rjb7UF+5c50YPeO3/OAXUS2OshumWsE+ild3bjNao10B+96qot1m5Wc02NHxyaKNBbc0/0k/qjvjBhQmfXzPRooLc/iCT3xz+8+PoBM2fOXFte10SqNdDn//CHOw39yDA7c2iin0v9jF6/75FTppTr01vrd8uHXG8VU6n3NSb6fyLG3irlVWqb7XnS+6fc24/Qw4kiemPMQD9fxLtEVUt+GPHSm246UjJtN5V61am92MdrzN/zTr+B48aOHZv4Hnhb630//OHWrdsMvLZfXb+DS/1gjtN7Aj2OUufLVGug20lmVuz2sR9n6upPLnXctB+hZ/+25uV3jznqwgs7u6C0RwO9/cmB/mvS2DD54JOOfqC8rlVvoJ999tmDD9lrN3v90+AkNQait48YN2VsknWrYR0CfVNH6FHuO+KpnYHO1UC3T6e7IWagXyji/ThJoN/zy1mT6nN1V23qOeNdDX4b6K2hd0Pdlh+ZNmLEiGy5fygP3fDzyVH/gdflw7Di451AL6871Rro8+bNa9jCX/e9TG3/sxIFejb3TEPuzWP3nvyNzqaZ7tFA7+hSti1q+d4hE07/bnldq95At1P4Lp1/3TIRGZKkRt/Xe/Y9espXk6xbDetU/AOuGooqdx+MiWaImO85fMrdPlnqypiBfqaId2WSU+4Pzr92XChqr1KvK6UnNtCjbP7WYJvtT6xEoC+dN28nqQkX+2K2LfUCp2L7TaAXE+r636s10O0c4f7qzS6vqas7PlGgh9mnmt8Nx371tNNe7ESgxwPdnjlojsJfjTnmxKPs6cJyOletp9wfnDVreG7Luuc1lEFJ6suEeutXjpsyIcm61bAOgb6pI3QTniQi9nm7zv2G3jFpznQRuSReoJspIv6NcabLfT/lgzfNGhlm6n5Z6m/oFr1Jsve2eJsfU+4p9459ChbdMmd+bfL7ijv9WyXQy/sYq9ZAnzVr1vAdtszM9aW25J9qbHB6Ev1pSO3mh39qzJjO7tLolUDPh+apAetyB+918sn2KDbxq1oD/eE7r9u9sU0eSXhnjfhBePW+R02dmhiml1ck0DcZ6Ll9xegSZ29by4dfFy/ubWvJr3J/4Lar986rf1+pV5wWps9syf3hn83R/qeVcZX7xq1dcsvlp3h+3U9EgkQXy3T2d0qgl/cJVq2B/vCCH2zblB9ydyao+1SyI/Tw0SdfWXFwF7OO9Xigt/+UZVa0rglHHzZ1qr1wLPGrWgP9zjtnjRzQVvpBxHqIoMX74YjJk89PDNPLKxLomwx0M0wkshdWlHy7Vef9rJqJZYaKRJeK6MR4R+j5/VQzv0kyThcsuGzHIfkBf0pyxWkYmqbwd3/86Jirr16R5L3fv87MmTMH7rnTh39V4wf7lvoB3dX7E+jldadaA/3+BT/+vOcNfTAKTcn3M7cHZ/7ug8ed1NUDWno80G2n7L61rGuZfMjk04o9Da7LxlZroN93y+WXqN//rKRnV6Ns7oSRk06dV96o7r21+3Sglzj162si3tzYU7+aaLFoxad+nS95U+lpBQPx9A8i/q9UtejjRY0xHxUT3SgqMaeB9HdR1eeSDNF77723X9D0ziuByLAk66/NrPj8kUfOeDzJuptaZ+ltV58n6tu5niv2RY1AL6871RjodpbBV59eck5NMPTihF/+8iJ65QHjppzRhU5ZgW5P6yd5+X4g2aZ112z/4tvn7VDG7WtVGuje0pvmPCGZ4NNJbOw6LS2rPnfo5PPsQUiffPX1QLcPZ3lZRGqK6Ns6XxOJDlWtfaZYpzp+Zz5DxFxebNkS/93e+lXhecVVRcw0Ed9+WSl6oYsxrbuJ+PaJcx8uuu9G3hT1P6+qrxZdtpMFls6/7hER+UKS9bU1+M7+J5yQ6MEum3q/xYu/t5W/YvBvJKj7ZJL92dQ6BHp5ktUY6AsXLhzir1pxT20m2ifJRZRhmGsMguiCA8addkU3BXq+Ldty5sCBsnTNyhXFPvvetwsfknVvv71m/EUX2WcPlHwr6vqNVWOgL/rFVV/ISM2dYmSLJKPS9q2l3ysfPeKIi/vsw6D6eqAPEAn/KKJxPqAjEXOwamZpnGYbY3YSiWz4V/DWtTjvXPIyq0WiL6nWdnZ7zHs2aEzuIBHv1yL2iXJFXkZ+K+qPVdV3ii3a2b8vnX/Fz0TquzpS6XTToYTPHjxu6u6VfOzjkmuuOSU/QD8bif0i1P4ygZ+rC+0Zi2jnUusk0EsVe+/y1Rjod11/xaiG+no721jCv319tV+LHvWFyZO7OtJLfIQeiuRrWoPR+51wQuzHp5bXpQ+uXYWB7i+df901ImJnwiv+2bYpkDC8Pzto66+OGTOmudJePbW9ZIX31N4Vyxv7oBET3SQqRxbfpUKpUztmPYtxJGsGi4nuFNURFT+oLr6zMZewT3k1t4jnn6mqK4utZIz9PTD/NRH5dvGarJe5TsQ/R1UTzyy1+IZLJvp1g28stm+d/HtLU92aCYcdds6vEq4fe7V7fzHnijoTnBZ7hY4FCfRSxao70N+eN6/hKS93XxDI3kkrC0P508gJU+xjh7s6G1dWoAdZ/9ADJk2yZ9p65VVtgf6bW64+KAxqrg1M9KEkZ1Xa599vvGDk88t/ojNnJj5z0SvN2OhN+3qgZ6T9iu1vxgqo9vA7W1WLXmhljPFEoqNF9CYRU/SZw73TSG0SMcepBnfFef/CU+RMNF9U9i++fGFonNVxD3riAX7HHbN3GBRm7NmDki8usjsQmvCRsP/WB3X3t+aF82fPqpXM/xR3ee8SBHqpYtUd6Pdfd92JpkHskV7Sz0abJ1ceMO7EM4vIEOhjzkn84KWNbc3RpmbxV+csCIJMORPChCu17SvHHDPt0fJGdO+unXTQ9u5eb/TuHaeQFxcP9MJKr4tEB8f5Hd0u3BGAN4vqyJjb70GXDUfn01V1eZw3NqZ1FxH/MREZWHx5e4Fd/gDVzO+KL9v5EgsWTK/frGXXhaZW9k2ynTA0jf663HkHTps2J8n6cdch0ONKVXa5ajrlfveVV/5XzWY1dwai25dR5erBq9pGf3Za0WAg0CsT6Lr0llsOFz871wuCQQkvYpRs1jz+ekvuq9OmTUv882IZY6ZiqzoQ6OZDYqLHRGNc5NX+pft/RLxr4k5lakzuKyJ6q4hsVTH1ymxopYg5VDUT6xulMfYsQ/4CEflWrC8nRv4o6h+rqi+VubvewqsvHVu/2dDbkv6xSRi+3ZTLnXjY5NMXlbkvna5OoHeXbNfbrZZAv+WWyz+zld9/biTyX+VI5CKzdNSEkw6MsQ0CvQKB/stf3nDIEJOfY8TfJunnixfUSdi0atJBJ5x+cyWv14kxBiq+iAuBPlgkulJEx8cMqodF/SPinHbvOEqvEwm/KeKdH2v7FW9RJxvMi/354CRVjTXXuTGmQUz4hGicCwgLv5/PEvEvUNV15ZY0Z9Gc7bdb6T8qgW6ZZFuFqWBbvKdWBLVfHT9+fKVv+yvsEoGepDPlr1MNgb5gwYIdB+TXXVEb6P5RWN5NKPnW7NEHnXDaHTFkCPQyA/22267ee5ia6/0g84mkfbO/nUfZ3LP9ahqP3Gfs2f+I0beqXsSFQPdE8naq1hiPA7W9sE8Nyx+omrHP6Y71MsYMF4nuFdE9qiTU7X3nR6tq7HAzJjxUROxv7TF6Xgj040T8W5M8B/39qPa0+xCz47c9v/685N+iA+OF0R31mcZz9jryzNdjNa6EhQj0ErAquGhvB3ohzP1184Kc7JH8qvYNIH/YrS2z3/CJE5tiEBHoZQT6r6//+dFBfcNPRMy2Maw7XcQGerZ11TmjXlj98758Mdz6AmN8uJfD1TPrGtP2KRFvoYhsE+sdjdwh6k9U1diP5jQm92URvVZEPh7rPbprISOviObHqtb8Me5bdFzg95CIfDHWOkbeEC1caxDrVrg423xg/hX/3aaZuwMTfCjO8ptaxheJWkX+oNJwxshx4/5S7gMmNn4PAj1pV8pbr7cC3ZxySuYXu+8+YujQhstEop3Kq0LEC4J8lPWPOvC44+LekUGgJwj0RYsW1da+8cZ5OsD7WhTrWqDOO9vxjPh/Lc/XHDJx4sS/lzsGqmF9RwLd2NPuPxLRk2MeQdt70vct9YIvY8LxIvLj2F8cKt9he2T6P6qBvUc29suY0F79eVu855LbeWrMr0X9w1W1NfabFFnQ/iHqslcuqBnQ75tJj9I3vEUo7+TWtc1cPWjQ7ccee2zROxbi1JDW29beybV+Yfz4U+yFkr3y6ulAf/DBB+uaXvrtx31/y/OC+ppj7eM2yy288Pzz1uxdA7ZvOGGvvY6Le4sngV5CoNvJfjJv/3Mfr6HhAtFgzwqcTbFtj0wUXX7ghFPOLXcMVMv6TgS6xTQmPFJEfyFi4j0hzcgSUf/QONOlbtwsY8Kj2h+tqp/ouSYWToG/JGJOKXVedWPMADHRIlHZJ+b+5kT0W6q+fXxsRV933XX9bg2tbfeLCRLN5LTxzhQ+RHPmEVO/5tKGpmFPfmHCBPvzQ9H5BTZV0OPXXLPlujqd62d0VKn3sPb129ZWSdOk/o39nqhoozfaWDjsrTdHj75gVWfbLzfQI/W/OfKYST/qav/NzJnBYzvssE3Wa9qmLfJGByKnS6AVeUhP4UFCObN8xarmg8afeeZTJTiWFehRVDdq9IQJS0p4v4ouWu596K81/2WLKVN+3uXdOS/MnDnwr7sO37LfsuhjmWHBdDHByEoVUTg6bzGPrPReOG7ChO+9Uqnt9vZ2HAp0s72Y6D5R3S7WUbqRUFROVA1KnojfmLa9RLzLRHTPWO9VbpeNPimaP0s1Y6dRLellTHSeiPl27KNzkWdFwvGVPN2+8Q4vvvmKn9bU9TstCsu/t99eLGdfocjjbY1tv/Tqze8H6JrX3pLtlhd77OqDM2cOXrPVVh9u6G928H1voglqv5rkzEFfDvTCF+FAVmskRZ8BUNKgW7+wkXxjy9rxh0+ebn/u2eSrzEBvDUOZo8P8q7NZO29E+2vzN5r9rEi/3LD6frWS6583wSe9rPlqWKd7Fb4IhomnVfhADV4QZHMtufNHHn/SVSIlOZYV6GGYO62lZrMHNw/Din6Gh2Go6/qvjYYMWfHqiBEzO73gttxAD32zf1Qvy8LQ37D/9U1ra/KZoD7KeQ2hlxna34v2NqZufy+QHS18JfsWmvDd1ih/8mHHTYv7E0miP4GeXqmig6Gnd37j9yvMv56P5opXeIpYvCkbjXlONBhZysVlGz6rjNlRJPquiBwoogMrH+yFo/Ks5OVm8fxLVPX5Un2NMTuLCe1sd4U/iBivnORljvpBoqlaY2xf7p416+M1g7wba+tq9056Zer738d+SNtHVaxraV5eW1PzR+Plnw8j75XI6Dv9vVxrrra+TaPVKtma2ign/T0/Y2eT+kgmE+5pJNi9nA/5vh7ocXqWfJlwzbqH/7b9EbNmdTo3dpmBnheVZWr8N42EG87MhWFo5zffTESG1dTVb3iKSSUDwZq0/wabvemttsy5U6ZMiTUXxEaWiQO943kQ/wiNvyLQfLKntHTR1FByjavy68449tjzOv3MKSvQw1DCIPNsIF6byH++kARh1BCKv5kEOtT+XdmvXRqGUupZsxjjNQpN+N2Dx0+dGWPZPrWIM4Fu1Y1p20OMd5to7AvX7Cnae0T8yaq6utTOtd/bHe4ponZWqKOkMD94ebe9FC5CN8b+j1+KyPWqQaLpHY0xm4lEvxCJMytcR+XG/FM02FdVKzKDU2ee/zdv3h6e13xXEGTiXcRYQmPWP4XKfspFoUgkoZggyrX/735m46dUqURS7pcKAr3z5gTZlvkjJp1+XFf39pYZ6IU3/8BvbPY2xzJvPys25Ox7toUtf1pbs8XIsWPHFp12eRPbKyfQ22vuOENVbF9L/fcozDW1tdV/5ZCJEzv9KaasQO/k2abdENybLF1bcz/+7vVTL3zoIXvHk1svxwLd+JKPrhRP7G1s8Y7SRXKSNz9SP3NR0tYaYzYXib4gRuyH1yhRrS892AtH5Ln2i9fMPJHg6aQPRWm/qj1/qohcVsK0tW2SN5epn5mR1KGU9ZbceMUJeb/uyiDQfqWsV23LEuib7oj9OcSE3pT9xk2yz93u9FtuJQK9N8ZEPpt/elVd46Rx46Y/mfD9ywr0hO8Zc7VwdT7qv/9BEyb8ubMVyg30mDtS0cXsl6Awl78u89Ib542YObPkA7iK7kw3bcypQG8/SjefEBMuFNUdSjBbJWKOVs08UMI6H1jUGHu1vQwViewFaPa+76+IiP2/2dfG1v/5gDPyuhh5RDx5SMS3s769Xs7DUNoNwjEiMteeciyhnpdE/C+qqn2sYk+8MnfPn3N2Pwku7uQLe0/sQ9nvQaB3RhjmWvtnPjl69BT7eONOX30y0EPz96Bm4LEjxo61t04mfRHoSeUSrOcFgWnLys3/Xtd8Xl+f3rWr8p0L9PZAK1wI9h0RqYvfe2PvQzw57lSqXW23/XnqhWe02weSbCMS7SIiQ0S0of3CGbOi/b/Ahqe9Fc3eHhbGeZ55sXqMye0nonYKw+HFlt3o3+2ZAXs7nL3PvidfNffOn/P9IPTPCgKt+G+BPVEIgf5B5cKRUCb4bWazbQ8bMWJEl0dCfSzQ7RfxP9a8smLyl2fMKPe+ZQK9J/5A298jG0XZOc2PPfedrq7n6Lnd6b53cjTQ7WNCo9+IlPoIRP2rSHSqas3j3UfefVs2Jrd3x7zzHynxXZaI+GNU1QZ7j74WLFhQX9+88se1/esnaRjaLzx96kWgf7Bdhek0TdPXt9n5yz/ZZZdduryCvi8EeuHWNJGsSLj4Yw89NfXjs2dX4gEeBHo3/6Wb9kOENS1hcFFm4ObXjBo1qmLzanTzrifevJOBbjWMye0vonZO5UHxdSxH3n7znqqaeTj+er2/pDG5ESJ6nYh8rMS9Wd0+FW7Nn0pcr2KLP/vsszVvPPngeVpTf5bv6xbdfUFTxXbcnoYJAmmVzLkHHnXspZ1t987Zsz9fPzjzi0DiPEDoP1tpf0Zz9rHVpnHc+PHndjrN79KbZj0kmbovV7Ku8rYVRm1Rbt9DJpxe9El91R7o7T0IXws1vEH6bf2DCj7Gl0Avb5AVXTsXyDOSlZ+NOu5E+zjcVLycDfRCqEe574mnF5beSfOCiJyhmum1iRtK2WdjwtH2GcxSYmC0X6yk3xDxftgbR+cb1zhzpvE+/7F5x3u14Y+9INi80rcYleJZyrJ1tXXS1Jab0dXkJikM9H/k13kHH3Tyyf8qZlmtgf6fWxn9J/yWxm/uW/kn/RHoxQZHgn9v71t2XST+IpH+Pxo5blzSixYTvHvvr+J2oBvTr+NJbCeUftW5rJO8mSNe8F1VXdP7rfrgHhhjtpV8NEM8mSgi/UvbR/s89fzPxAtmxH1iW2nbT7b0Pddf/1kv0zrdDzLjq/lH9fYPDvuTarRQX142Y/8LL3yOI/T2e7Oj1vylb0f+NybGeEhJtQV64ep88SWfyz6iq5tn9w/637/XyScvSzaau1yLQK8gascXMCNheHNjrnnu4ZOn2zOsPXUnXAUrKW9TTgd64SjdmE+KRDclfFKa/U15iYj5QSUuliuvVe9duzBpjERXiIg91Rr3Fr2OjRRukbtPxD9FVatu2sO5c+duPqi19YihA7xvR3V1W1TT0XrHAx1MJqN3ZXx//trnX390zEUXdXnffpqO0K1P2NQY9xGiUi2BXph1MLTTR8pjUtdyvbey32/2n9L1Ffpl/j0T6GUC2tU7jsiNhnKLl8vdNrB2sz/uUaHnO1Rg93p8E2kIdPuXap+UZn9HSfqktNdF9Lsi3g2VfGBJkm6bwlmH/BlizKmi8tEk2xCRN0XMUaqZ3ydcvydW8+6cPXu3Af3lNAky9v7++p54067fQ18Npfnu5nWrb9WhO79wxBFHdDoD2sbbSUugd/zm/1L2reajDp8+PdYtXVUR6MZ/16gs7b929S1rt63/88iRU9/u6t75Co1DAr1MyDA0r0VG7mhrqLl7yJB3/zpixHQn7y0vhcn5QO84SleRyN4Xbm/nKvHU9AZOO6+xnWjhYhHfPku9pRLPCo/TrI7b4OpEogNE5AIR+XTHLXFxVn//MstF9CIR79pK3CaXZAdKWcdeBd+v39rtZXV0em0Q2Kfd2YloeuJsvD1d1yZh+E5rmL9DM9E9rfVvPDtkyIFNI0aM6HSO603V1h7oensgQUkz49mAbA5bHm80TWO7uihu8c2zfucHdfEejVsKfonLtp+9aLn5rbaac+JOhdqDgZ43gUQaFh7gE0lolplA/+CZ7P0vDQkWbZ3bek0FL3iLI6e/vunahTX1mVHVdAaqsONhuK4tX79vVzPFLblx9o/yvpwTBJl4D8OKI/LBZexvWrZfhZ6F9tbeMPdiLhM+GjXLomDzdb/3vN2b03D1ely+VAT6egxjcjNF9GtlHu3ZwXWfiMwR8e3tbStUu2cKQWMKN17YWej2FpGzOm7DK+cPaI2IflPVvzzuAKmi5fTh2bP/K6qTI1rqMqMClW3FyGBfpMYEQclzPm88dWbHVfVN9ktaKNIiIsuCXPhwY9h8z+GTp9uzGGXd7vL4ld/7r9UDB/0oL8E2GmSMCQvzFGx4BYU5g/W9fdXQM7V1XpQLn9Qh4dkjR07tdMKfpTfPuUWC4HO93SvbB9O07rsHnXD6jXH3Zc6cOdtv118WqV9wr9jL2ItmjLSEKk11oTa11embmaj2321+/t9vN8qzkyZNsnez2MAod67mpPusi2++do5Xlxlh5yuvrle4trXRP2H0SSc909l+PXTL3OktvkwIJJepwHzXG94m1/5lq8kXbYzC2iYNcq/XiveKmOzzz93z0F9Ou/329dcz9FbfqqtV79ubVAW6rd2Y6Osi5vwyjtQ3IlR7WvFmkehBkcybIrJcVcu6EMMYYyek2Vwkt42Iv4+Y/Mmi+skKjCIb5j9U9e3MbH3+9cCsWXuHg8xoTzKflkC2lNAfHAU6xG+fzMc+4zpYH9odgW3soUcY+q1BoC0i9j/TGIa5VX6d/susav1TIPXPvCzy7MndcxFUnzenAAQQqG6B1AV6R6hfKGLs7WwVmMikcIGZ/e3mtyL6exHznEj+LZGM/X11rf2vs1vCjCk8u31I+/SwucEi3jYi+ikRs5cY+YKofWZzuV9EC/u3UkS/p+p3eq90dQ/Trvdu5syZA3fbJtjZHzB811ppHdYvqO/fFpqB2trSkKsNPBNKNlCv2QujpqgtWFEn2WUrh8myfivqXolza1VftmHfEUAgPQKpDPT2UA8Pt1evi3ifKD807RbXUxYC2E7t+o5I4Qlu9r91UngITMfzkr3CUaQ9ErcXeg0TMZuJ0aGiOvQ/Q6/cIN+wT8+I5M/rK/fUp+dPj0oRQACBygqkNtDbQz23j4heLKL7VCbUN25OqbSVCPD3v7+9Nc18SzXzWGWHDVtDAAEEEKg2gVJTp9r2v+z9McbsIBLZ0++Tyt5YdW3gDhF/uqrah7/wQgABBBBwXCD1gd5+pG76i+TPFTFnishmfbzn74roj0S82eU+hrWPO7D7CCCAQKoECPSOdrdfoJb7rBjvYlHZs8xb23pjENnbrh4SyV8kkvlbX7jHvDeQeE8EEEDAVQEC/X2dbb9tLH+yGJkmaj4hopnK/75eqeFUuII9J6L/FDE/VQ3s09Z4IYAAAgikUIBA76TpxpitRMKzRbxDROx88Hbij0pfuJZ0xBWC3F5Z/6Tk80vEC65QVXsfPC8EEEAAgZQKEOhFGm9M2+6S16PF80aJmE+3357WW8FeeO+8UoM5ygAAC7BJREFUiP5V8vmHxAt+rqpFH1GZ0rFN2QgggECqBAj0mO02xmwtEn1GxOwnRg4S9Tpmb+vucO9okZFnRPP3tv9OHjzDEXnMxrEYAgggkBIBAr3ERrdfES8fFol2EpEDRcwXRXTnyh65rz8LYGeds/PG6+9EfPv/f6Wanl1eIh2LI4AAAgh0owCBXgauMWaAiAwUyW0t4v+35M2eorKjqGwnIltuNH1c1+9iHyOh8qYYeaHwn6dPiER/FMkstzPNqaq9gp0XAggggAACnQoQ6BUaHMYYr2M6V/uENDtH+0CRcHsR3bz9QTBqj+ztFwBrvlbEFOZ5FzHvigT2d/A1hcc6ithHL+W47axCjWEzCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFiDQ3e4v1SGAAAIIpESAQE9JoykTAQQQQMBtAQLd7f5SHQIIIIBASgQI9JQ0mjIRQAABBNwWINDd7i/VIYAAAgikRIBAT0mjKRMBBBBAwG0BAt3t/lIdAggggEBKBAj0lDSaMhFAAAEE3BYg0N3uL9UhgAACCKREgEBPSaMpEwEEEEDAbQEC3e3+Uh0CCCCAQEoECPSUNJoyEUAAAQTcFvj/8lvRmXg8O8EAAAAASUVORK5CYII="
                    ></image>
                    <image
                        id="image1"
                        width="850"
                        height="300"
                        xlinkHref="data:image/png;base64,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"
                    ></image>
                    <image
                        id="image2"
                        width="256"
                        height="256"
                        xlinkHref="data:image/png;base64,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"
                    ></image>
                </defs>
            </svg>
            <header className="homepage">
                <h1 title="Xenia 2022" className="homepage-header">
                    Xenia'22
                </h1>
                <div className="homepage-content">
                    21st July - 24th July
                </div>
                <button className="homepage-button">
                    Register
                </button>
                <div className="homepage-blocks-container">
                    <div className="homepage-blocks">
                        {ThreexBlocksOnLeftWithShadow}
                        {ThreexBlocksOnRightWithoutShadow}
                        {TwoxBlocksOnLeftWithShadow}
                        {TwoxBlocksOnRightWithoutShadow}
                        <svg className="homepage-blocks-lines" preserveAspectRatio="xMinYMin">
                            <defs>
                                <linearGradient id="linearGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                                    <stop offset="0%" stopColor="rgb(255,255,0)" stopOpacity="1">
                                        <animate attributeName="stopColor" values="lightblue;orange;purple;red;lightblue" dur="12s" repeatCount="indefinite" />
                                        <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
                                    </stop>
                                    <stop offset="100%" stopColor="rgb(255,0,0)" stopOpacity="1">
                                        <animate attributeName="stopColor" values="purple;blue;lightblue;orange;purple" dur="12s" repeatCount="indefinite" />
                                        <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />
                                    </stop>
                                </linearGradient>
                            </defs>
                            {PolylineTags}
                            {AnimatedIconsAlongBlockLines}
                        </svg>
                        <svg className="light-rays-from-centre">
                            <polygon points="20 15, 80 15, 50 75" />
                        </svg>
                        <div className="eth">
                            <div className="bottom">
                                <div className="left"></div>
                                <div className="right"></div>
                                <div className="up"></div>
                                <div className="down"></div>
                            </div>
                            <div className="top">
                                <div className="left"></div>
                                <div className="right"></div>
                                <div className="up"></div>
                                <div className="down"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Homepage;