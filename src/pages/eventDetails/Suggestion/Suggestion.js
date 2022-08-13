import React from 'react';
import './Suggestion.css';
// import ReactLogo from '../../../../Assets/Images/logo.svg';
// import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

const Suggestion = (props) => {
  return (
      <div className="suggestion" onClick={() => document.documentElement.scrollTop = 0} >
      HELO
      </div>
    // <Slide right cascade>
    //   <div className="suggestion" onClick={() => document.documentElement.scrollTop = 0} >
    //     <Link to={`/events/${props.suggestions[0]._id}`} className="card">
    //       <div className='img-container'>
    //         <img
    //           className="card-img-top"
    //           src={props.suggestions[0].logo}
    //           alt="Card cap"
    //         />
    //       </div>
    //       <div className="card-body" id="1">
    //         <h3>{props.suggestions[0].name}</h3>
    //         <div className="suggestion-text">
    //           {props.suggestions[0].details}
    //         </div>
    //       </div>
    //     </Link>

    //     <Link
    //       to={`/events/${props.suggestions[1]._id}`}
    //       className="card"
    //       href="#main-detail"
    //     >
    //       <div className='img-container'>
    //         <img className="card-img-top" src={props.suggestions[1].logo} alt="Card cap" />
    //       </div>
    //       <div className="card-body">
    //         <h3>{props.suggestions[1].name}</h3>
    //         <div className="suggestion-text">
    //           {props.suggestions[1].details}
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </Slide>
  );
};

export default Suggestion;