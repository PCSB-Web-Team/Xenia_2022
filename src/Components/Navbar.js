import React, { Component } from 'react'
import "../Components/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
        <div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>
        <main className="site-wrapper">
        <div className="pt-table desktop-768">
        <div className="pt-tablecell page-home relative justify-center px-40">
          {/* <div className="pt-tablecell page-home relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)', backgroundPosition: 'center', backgroundSize: 'cover'}}> */}
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  
                 <div className="justify-items-center ">
                  <div className="hexagon-menu clear ">
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div />
                        <div />
                        <div />
                      </div>
                      <div className="hex-item" >
                        <div />
                        <div />
                        <div />
                      </div>
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-universal-access" />
                          </span>
                          <span className="title">Home</span>
                        </span>
                        <svg viewBox="0 0 173.20508075688772 200" height={200} width={174} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530" /></svg>
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
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-bullseye" />
                          </span>
                          <span className="title">Schedule</span>
                        </span>
                        <svg viewBox="0 0 173.20508075688772 200" height={200} width={174} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530" /></svg>
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
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-braille" />
                          </span>
                          <span className="title">Events</span>
                        </span>
                        <svg viewBox="0 0 173.20508075688772 200" height={200} width={174} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530" /></svg>
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
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-id-badge" />
                          </span>
                          <span className="title">Build-up Events</span>
                        </span>
                        <svg viewBox="0 0 173.20508075688772 200" height={200} width={174} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530" /></svg>
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
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-life-ring" />
                          </span>
                          <span className="title">Industry Talks</span>
                        </span>
                        <svg viewBox="0 0 173.20508075688772 200" height={200} width={174} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530" /></svg>
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
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-clipboard" />
                          </span>
                          <span className="title">Sponsers</span>
                        </span>
                        <svg viewBox="0 0 173.20508075688772 200" height={200} width={174} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530" /></svg>
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
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-map-signs" />
                          </span>
                          <span className="title">Profile</span>
                        </span>
                        <svg viewBox="0 0 173.20508075688772 200" height={200} width={174} version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530" /></svg>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>)
    
    
  }
}

export default Navbar

