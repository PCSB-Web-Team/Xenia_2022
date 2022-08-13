import React, { Component } from "react";
import "./navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { current: false };
  }

  handleChange = (e) => this.setState({ current: e.target.checked });
  render() {
    return (
      <div className="hamburger-menu ">
        <input
          id="menu__toggle"
          type="checkbox"
          checked={this.state.current}
          onChange={this.handleChange}
        />
        {
          // console.log(this.state)
        }
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        {this.state.current ? (
          <main
            className="site-wrapper"
            // this.state.current === false
            //   ? "close-site-wrapper"
            //   : "site-wrapper"
          >
            <div>
              <div className="pt-table desktop-768">
                <div className="pt-tablecell page-home relative justify-center lg:pl-44 lg:pr-32 md:pl-8 md:pr-4 ">
                  {/* <div className="pt-tablecell page-home relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)', backgroundPosition: 'center', backgroundSize: 'cover'}}> */}
                  <div className="overlay_nav" />

                  <div className="hexagon-menu-mobile text-white text-3xl  font-mono font-bold pt-12  ">
                    <ul class="fa-ul">
                      <li>
                        <a className="" href="/">
                          <span class="fa-li">
                            <i class="fas fa-home"></i>
                          </span>
                          Home
                        </a>
                      </li>
                      <li className="pt-4">
                        <a className="" href="/schedule">
                          <span class="fa-li">
                            <i class="fas fa-calendar-alt pt-4"></i>
                          </span>
                          Schedule{" "}
                        </a>
                      </li>
                      <li className="pt-4">
                        <a className="" href="/events">
                          <span class="fa-li">
                            <i class="fa fa-trophy pt-4"></i>
                          </span>
                          Events
                        </a>
                      </li>
                      <li className="pt-4">
                        <a className="" href="/side-events">
                          <span class="fa-li">
                            <i class="fas fa-camera pt-4"></i>
                          </span>
                          BuildUp Events
                        </a>
                      </li>
                      <li className="pt-4">
                        <a className="" href="/industry-talks">
                          <span class="fa-li">
                            <i class="fas fa-microphone-stand pt-4"></i>
                          </span>
                          Industry Talks
                        </a>
                      </li>

                      <li className="pt-4">
                        <a className="" href="/sponsors">
                          <span class="fa-li">
                            <i class="fas fa-handshake pt-4"></i>
                          </span>
                          Sponsors
                        </a>
                      </li>

                      <li className="pt-4">
                        <a className="" href="/profile">
                          <span class="fa-li">
                            <i class="fas fa-id-badge pt-4"></i>
                          </span>
                          Profile
                        </a>
                      </li>
                      <li className="pt-4">
                        <a className="" href="/contact-us">
                          <span class="fa-li">
                            <i class="fas fa-phone pt-4"></i>
                          </span>
                          Contact-us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="hexagon-menu clear m-auto  justify-items-center justify-center col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <a className="hex-content" href="/">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i class="fa fa-home"></i>
                          </span>
                          <span className="title">Home</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height={200}
                          width={174}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <a className="hex-content" href="/schedule">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-calendar" />
                          </span>
                          <span className="title">Schedule</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height={200}
                          width={174}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <a className="hex-content" href="/events">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-trophy" />
                          </span>
                          <span className="title">Events</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height={200}
                          width={174}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <a className="hex-content" href="/side-events">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-camera" />
                          </span>
                          <span className="title">Buildup Events</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height={200}
                          width={174}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <a className="hex-content" href="/industry-talks">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i class="fas fa-podium"></i>
                          </span>
                          <span className="title">Industry Talks</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height={200}
                          width={174}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <a className="hex-content" href="/sponsors">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-handshake-o" />
                          </span>
                          <span className="title">Sponsors</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height={200}
                          width={174}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <a className="hex-content" href="/profile">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-id-badge" />
                          </span>
                          <span className="title">Profile</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height={200}
                          width={174}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#1e2530"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <p></p>
        )}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css"
        />
      </div>
    );
  }
}

export default Navbar;
