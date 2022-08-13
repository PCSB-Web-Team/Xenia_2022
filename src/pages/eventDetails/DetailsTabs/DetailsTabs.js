import React, { useState } from 'react';
import './DetailsTabs.css';
// import { Fade, Zoom } from 'react-reveal';

export default function DetailsTab(props) {

  const [activeDetail, setactiveDetail] = useState(0);

  const activeTab = "head-items active-item";
  const tab = "head-items";
  const det = "mi-content";
  const activeDet = "mi-content active";
  console.log(props);
  return (
    
    <div className='mi-container'>
      <div className='mi-head'>
        {/* <Zoom cascade> */}
          <div className={activeDetail === 0 ? activeTab : tab} onClick={() => { setactiveDetail(0) }}>Rules</div>
          <div className={activeDetail === 1 ? activeTab : tab} onClick={() => { setactiveDetail(1) }}>Schedule</div>
          <div className={activeDetail === 2 ? activeTab : tab} onClick={() => { setactiveDetail(2) }}>Prizes</div>
        {/* </Zoom> */}
      </div>
      <div className='mi-details'>
        {/* <Fade> */}
          {/* <div className={activeDetail === 0 ? activeDet : det}>
            {props.details.rules.map((rule, i) => <p key={i}>{rule}</p>)}
          </div> */}
          {/* <div className={activeDetail === 1 ? activeDet : det}> */}
            {/* {props.details.dateDescription.split('&').map((date,i) => <p key={i}>{date}</p>)} */}
            {/* <hr/> */}
            {/* <div className='details-tag'> Contact </div> */}
            {/* {props.details.contacts.map((contact,i) => <p key={i}>{contact}</p>)} */}
          {/* </div> */}
          {/* <div className={activeDetail === 2 ? activeDet : det}>
            {props.details.prizes.map((prizes,i) => <p key={i}>{prizes}</p>)}
          </div>  */}
        {/* </Fade> */}
      </div>
    </div>
    // <div>{props.details.details}</div>
  );
}