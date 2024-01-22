import { useState } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../store/middleware";
import store from "../store";
import "./Navbarnew.css";

const Navbarnew = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  async function handleLogout() {
    store.dispatch(logoutUser());
    props.toast.toast((store.getState().user?.userDetails?.name || "") + ', logged out!')
    window.location.reload(true)
  }

  function loginStateButtons() {
    return <div className="login-actions">
      {store.getState().user?.loggedIn ?
        <button className="bg-transparent text-blue-700 font-semibold hover:text-white py-3 px-7 rounded" onClick={handleLogout}>
          Logout
        </button>
        : <button className="bg-transparent text-blue-700 font-semibold hover:text-white py-3 px-7 rounded">
          <Link to="/auth" onClick={() => { setNavOpen(false) }}>Login</Link>
        </button>}
    </div>
  }

  return (
    <div className="navbar-wrapper">
      <svg
        className={`ham hamRotate ham1 ${navOpen ? "active" : ""}`}
        width={"36"}
        viewBox={"0 0 100 100"}
        onClick={() => setNavOpen((state) => !state)}
      >
        <path
          className="line top"
          d={
            "m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          }
        ></path>
        <path className="line middle" d={"m 30,50 h 40"}></path>
        <path
          className="line bottom"
          d={
            "m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          }
        ></path>
      </svg>
      <div className="navbar-desktop">
        <div className={`wrapper ${navOpen ? "active" : ""}`}>
          {props.toast.container}
          <div className="left">
            <nav>
              <div className="op">
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <Link
                    to={"/"}
                    className="hex-content"
                    onClick={() => setNavOpen(false)}
                  >
                    <span className="hex-content-inner">
                      <span className="icon">
                        <i className="fas fa-home"></i>
                      </span>
                      <span className="title">Home</span>
                    </span>
                    <svg
                      height={"20vh"}
                      width={"17.4vh"}
                      version={"1.1"}
                      viewBox={"0 0 173.20508075688772 200"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      <path
                        d={
                          "M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        }
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <Link
                    to={"/schedule"}
                    className="hex-content"
                    onClick={() => setNavOpen(false)}
                  >
                    <span className="hex-content-inner">
                      <span className="icon">
                        <i className="fas fa-calendar"></i>
                      </span>
                      <span className="title">Schedule</span>
                    </span>
                    <svg
                      height={"20vh"}
                      width={"17.4vh"}
                      version={"1.1"}
                      viewBox={"0 0 173.20508075688772 200"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      <path
                        d={
                          "M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        }
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <Link
                    to={"/events"}
                    className="hex-content"
                    onClick={() => setNavOpen(false)}
                  >
                    <span className="hex-content-inner">
                      <span className="icon">
                        <i className="fas fa-trophy"></i>
                      </span>
                      <span className="title">Events</span>
                    </span>
                    <svg
                      height={"20vh"}
                      width={"17.4vh"}
                      version={"1.1"}
                      viewBox={"0 0 173.20508075688772 200"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      <path
                        d={
                          "M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        }
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <Link
                    to={"/side-events"}
                    className="hex-content"
                    onClick={() => setNavOpen(false)}
                  >
                    <span className="hex-content-inner">
                      <span className="icon">
                        <i className="fas fa-camera"></i>
                      </span>
                      <span className="title">Buildup events</span>
                    </span>
                    <svg
                      height={"20vh"}
                      width={"17.4vh"}
                      version={"1.1"}
                      viewBox={"0 0 173.20508075688772 200"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      <path
                        d={
                          "M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        }
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="op">
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <Link
                    to={"/sponsors"}
                    className="hex-content"
                    onClick={() => setNavOpen(false)}
                  >
                    <span className="hex-content-inner">
                      <span className="icon">
                        <i className="fas fa-handshake"></i>
                      </span>
                      <span className="title">sponsors</span>
                    </span>
                    <svg
                      height={"20vh"}
                      width={"17.4vh"}
                      version={"1.1"}
                      viewBox={"0 0 173.20508075688772 200"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      <path
                        d={
                          "M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        }
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <Link
                    to={"/profile"}
                    className="hex-content"
                    onClick={() => setNavOpen(false)}
                  >
                    <span className="hex-content-inner">
                      <span className="icon">
                        <i className="fas fa-id-badge"></i>
                      </span>
                      <span className="title">profile</span>
                    </span>
                    <svg
                      height={"20vh"}
                      width={"17.4vh"}
                      version={"1.1"}
                      viewBox={"0 0 173.20508075688772 200"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      <path
                        d={
                          "M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        }
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <div className="hex-item">
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                    <div className="hex-item-inner"></div>
                  </div>
                  <Link
                    to={"/contact-us"}
                    className="hex-content"
                    onClick={() => setNavOpen(false)}
                  >
                    <span className="hex-content-inner">
                      <span className="icon">
                        <i className="fas fa-phone"></i>
                      </span>
                      <span className="title">contact us</span>
                    </span>
                    <svg
                      height={"20vh"}
                      width={"17.4vh"}
                      version={"1.1"}
                      viewBox={"0 0 173.20508075688772 200"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      <path
                        d={
                          "M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        }
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          {loginStateButtons()}
        </div>
      </div>

      <div className="navbar-mobile">
        <div className={`wrapper ${navOpen ? "active" : ""}`}>
          {props.toast.container}
          <ul className="fa-ul">
            <li>
              <Link
                to={"/"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-home"></i>
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/schedule"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-calendar"></i>
                </span>
                Schedule
              </Link>
            </li>
            <li>
              <Link
                to={"/events"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-trophy"></i>
                </span>
                Events
              </Link>
            </li>
            <li>
              <Link
                to={"/side-events"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-camera"></i>
                </span>
                Buildup Events
              </Link>
            </li>

            <li>
              <Link
                to={"/sponsors"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-handshake"></i>
                </span>
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                to={"/profile"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-id-badge"></i>
                </span>
                Profile
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us"}
                onClick={() => setNavOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <span className="fa-li">
                  <i className="fas fa-phone"></i>
                </span>
                Contact Us
              </Link>
            </li>
          </ul>
          {loginStateButtons()}
        </div>
      </div>
    </div>
  );
};

export default Navbarnew;
