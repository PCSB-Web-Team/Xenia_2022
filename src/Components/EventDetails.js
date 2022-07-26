import React, { Component } from 'react'
import "../Components/EventDetails.scss";

export class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {current: 'About',name:"Codestrike",about:"coding competion",details:{round1:"mcq round",round2:"coding competion"},contact:{name:"Vansh",phone:7972851721}};
  }
  handleChange=(e)=>{
    console.log(e.target.id);
    this.setState({current:e.target.id});
  }
  render(){
    return(
      <div className="text-center">
      <div className="cardie" data-state={this.state.current}>
      <div className="cardie-header">
        {/* <div className="cardie-cover" style="background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"></div> */}
        <img className="cardie-avatar" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="avatar" />
        <h1 className="cardie-fullname">{this.state.name}</h1>
        {/* <h2 className="cardie-jobtitle">UI Developer</h2> */}
      </div>
      
      <div className="cardie-main">
      {this.state.current==='About' ?
            <div className="cardie-section is-active" id="about">
            <div className="cardie-content">
              <div className="cardie-subtitle">ABOUT</div>
              <p className="cardie-desc">Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.
              </p>
            </div>
          </div>
          :
            this.state.current==='Details' ? 
            <div className="cardie-section is-active" id="details">
            <div className="cardie-content">
              <div className="cardie-subtitle">DETAILS</div>
              <div className="cardie-timeline">
                <div className="cardie-item" data-year="2014">
                  <div className="cardie-item-title">Front-end Developer at <span>JotForm</span></div>
                  <div className="cardie-item-desc">Disrupt stumptown retro everyday carry unicorn.</div>
                </div>
                <div className="cardie-item" data-year="2016">
                  <div className="cardie-item-title">UI Developer at <span>GitHub</span></div>
                  <div className="cardie-item-desc">Developed new conversion funnels and disrupt.</div>
                </div>
                <div className="cardie-item" data-year="2018">
                  <div className="cardie-item-title">Illustrator at <span>Google</span></div>
                  <div className="cardie-item-desc">Onboarding illustrations for App.</div>
                </div>
                <div className="cardie-item" data-year="2020">
                  <div className="cardie-item-title">Full-Stack Developer at <span>CodePen</span></div>
                  <div className="cardie-item-desc">Responsible for the encomposing brand expreience.</div>
                </div>
              </div>
            </div>
          </div>    
            :

            <div className="cardie-section is-active" id="contact">
          <div className="cardie-content">
            <div className="cardie-subtitle">CONTACT</div>
            <div className="cardie-contact-wrapper">
              {/* <div className="cardie-contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" /></svg>
                Algonquin Rd, Three Oaks Vintage, MI, 49128
              </div> */}
              <div className="cardie-contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  (269) 756-9809
                </div>
              <div className="cardie-contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" /></svg>
                william@rocheald.com
              </div>
              {/* <button className="contact-me">WORK TOGETHER</button> */}
            </div>
          </div>
        </div>
      }
        
        
        
        <div className="cardie-buttons">
          <button data-section="#about" className={this.state.current==='About'?"is-active":null} id="About" onClick={this.handleChange}>ABOUT</button>
          <button data-section="#details" id="Details" className={this.state.current==='Details'?"is-active":null} onClick={this.handleChange}>DETAILS</button>
          <button data-section="#contact" id="Contact" className={this.state.current==='Contact'?"is-active":null} onClick={this.handleChange}>CONTACT</button>
        </div>
      </div>
    </div> 
    </div>
      // <div>
      //   <button> heloo</button>
      // </div>
    )
  }
}
export default EventDetails
