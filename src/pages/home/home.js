import React from "react";
import { useEffect } from "react";
import "./home.css";
import hex_2xblock_left from "../../assets/images/Block_x2_Left_shadow.png";
import hex_2xblock_right from "../../assets/images/Block_x2_Right_shadowless.png";
import hex_3xblock_left from "../../assets/images/Block_x3_Left_shadow.png";
import hex_3xblock_right from "../../assets/images/Block_x3_Right_shadowless.png";
import ethereum from "../../assets/images/ethereum-block-floating.png";
import binance from "../../assets/images/binance-block-floating.png";
import chain_icon from "../../assets/images/chain-block-floating.png";

//! To many imports using network CDNs ~_~, will have to work on this to get rid of them
import binance_stack from "../../assets/images/binance-stack-block-floating.png";
import * as PIXI from "https://cdn.skypack.dev/pixi.js";
import { KawaseBlurFilter } from "https://cdn.skypack.dev/@pixi/filter-kawase-blur";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@3.0.0";
import hsl from "https://cdn.skypack.dev/hsl-to-hex";
import debounce from "https://cdn.skypack.dev/debounce";

function Homepage() {

    useEffect(() => {
        // return a random number within a range
        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        // map a number from 1 range to another
        function map(n, start1, end1, start2, end2) {
            return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
        }

        // Create a new simplex noise instance
        const simplex = new SimplexNoise();

        // ColorPalette class
        class ColorPalette {
            constructor() {
                this.setColors();
                this.setCustomProperties();
            }

            setColors() {
                // pick a random hue somewhere between 220 and 360
                this.hue = ~~random(220, 360);
                this.complimentaryHue1 = this.hue + 30;
                this.complimentaryHue2 = this.hue + 60;
                // define a fixed saturation and lightness
                this.saturation = 95;
                this.lightness = 50;

                // define a base color
                this.baseColor = hsl(this.hue, this.saturation, this.lightness);
                // define a complimentary color, 30 degress away from the base
                this.complimentaryColor1 = hsl(
                    this.complimentaryHue1,
                    this.saturation,
                    this.lightness
                );
                // define a second complimentary color, 60 degrees away from the base
                this.complimentaryColor2 = hsl(
                    this.complimentaryHue2,
                    this.saturation,
                    this.lightness
                );

                // store the color choices in an array so that a random one can be picked later
                this.colorChoices = [
                    this.baseColor,
                    this.complimentaryColor1,
                    this.complimentaryColor2
                ];
            }

            randomColor() {
                // pick a random color
                return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
                    "#",
                    "0x"
                );
            }

            setCustomProperties() {
                // set CSS custom properties so that the colors defined here can be used throughout the UI
                document.documentElement.style.setProperty("--hue", this.hue);
                document.documentElement.style.setProperty(
                    "--hue-complimentary1",
                    this.complimentaryHue1
                );
                document.documentElement.style.setProperty(
                    "--hue-complimentary2",
                    this.complimentaryHue2
                );
            }
        }

        // Orb class
        class Orb {
            // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
            constructor(fill = 0x000000) {
                // bounds = the area an orb is "allowed" to move within
                this.bounds = this.setBounds();
                // initialise the orb's { x, y } values to a random point within it's bounds
                this.x = random(this.bounds["x"].min, this.bounds["x"].max);
                this.y = random(this.bounds["y"].min, this.bounds["y"].max);

                // how large the orb is vs it's original radius (this will modulate over time)
                this.scale = 1;

                // what color is the orb?
                this.fill = fill;

                // the original radius of the orb, set relative to window height
                this.radius = random(window.innerHeight / 6, window.innerHeight / 3);

                // starting points in "time" for the noise/self similar random values
                this.xOff = random(0, 1000);
                this.yOff = random(0, 1000);
                // how quickly the noise/self similar random values step through time
                this.inc = 0.002;

                // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
                this.graphics = new PIXI.Graphics();
                this.graphics.alpha = 0.825;

                // 250ms after the last window resize event, recalculate orb positions.
                window.addEventListener(
                    "resize",
                    debounce(() => {
                        this.bounds = this.setBounds();
                    }, 250)
                );
            }

            setBounds() {
                // how far from the { x, y } origin can each orb move
                const maxDist =
                    window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
                // the { x, y } origin for each orb (the bottom right of the screen)
                const originX = window.innerWidth / 1.25;
                const originY =
                    window.innerWidth < 1000
                        ? window.innerHeight
                        : window.innerHeight / 1.375;

                // allow each orb to move x distance away from it's x / y origin
                return {
                    x: {
                        min: originX - maxDist,
                        max: originX + maxDist
                    },
                    y: {
                        min: originY - maxDist,
                        max: originY + maxDist
                    }
                };
            }

            update() {
                // self similar "psuedo-random" or noise values at a given point in "time"
                const xNoise = simplex.noise2D(this.xOff, this.xOff);
                const yNoise = simplex.noise2D(this.yOff, this.yOff);
                const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

                // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
                this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
                this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
                // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
                this.scale = map(scaleNoise, -1, 1, 0.5, 1);

                // step through "time"
                this.xOff += this.inc;
                this.yOff += this.inc;
            }

            render() {
                // update the PIXI.Graphics position and scale values
                this.graphics.x = this.x;
                this.graphics.y = this.y;
                this.graphics.scale.set(this.scale);

                // clear anything currently drawn to graphics
                this.graphics.clear();

                // tell graphics to fill any shapes drawn after this with the orb's fill color
                this.graphics.beginFill(this.fill);
                // draw a circle at { 0, 0 } with it's size set by this.radius
                this.graphics.drawCircle(0, 0, this.radius);
                // let graphics know we won't be filling in any more shapes
                this.graphics.endFill();
            }
        }

        // Create PixiJS app
        const app = new PIXI.Application({
            // render to <canvas class="orb-canvas"></canvas>
            view: document.querySelector(".orb-canvas"),
            // auto adjust size to fit the current window
            resizeTo: window,
            // transparent background, we will be creating a gradient background later using CSS
            transparent: true
        });

        // Create colour palette
        const colorPalette = new ColorPalette();

        app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

        // Create orbs
        const orbs = [];

        for (let i = 0; i < 10; i++) {
            const orb = new Orb(colorPalette.randomColor());

            app.stage.addChild(orb.graphics);

            orbs.push(orb);
        }

        // Animate!
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            app.ticker.add(() => {
                orbs.forEach((orb) => {
                    orb.update();
                    orb.render();
                });
            });
        } else {
            orbs.forEach((orb) => {
                orb.update();
                orb.render();
            });
        }

        // document
        //     .querySelector(".homepage")
        //     .addEventListener("onclick", () => {
        //         colorPalette.setColors();
        //         colorPalette.setCustomProperties();

        //         orbs.forEach((orb) => {
        //             orb.fill = colorPalette.randomColor();
        //         });
        //     });
    })

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
            <div className="homepage-container-background overlay"></div>
            <canvas class="orb-canvas"></canvas>
                <header className="homepage">
                    <h1 title="Xenia 2022" className="homepage-header overlay__btn--colors">
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