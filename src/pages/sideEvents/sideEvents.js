import "./SideEvents.css";

import React from 'react'

export default function sideEvents() {

    const buildUpEvent = () => {
        const buildUpEventDetails = [
          {
            eventTitle: "event1",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit debitis aspernatur veritatis eos cum quas inventore aliquam, amet, nesciunt praesentium pariatur accusamus modi et deserunt quam iusto cumque dolorem iure reprehenderit in!",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5c95d031973881.5669d0f5dbd49.jpg",
          },
          {
            eventTitle: "event2",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit debitis aspernatur veritatis eos cum quas inventore aliquam, amet, nesciunt praesentium pariatur accusamus modi et deserunt quam iusto cumque dolorem iure reprehenderit in!",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5c95d031973881.5669d0f5dbd49.jpg",
          },
        ];
      };

  return (
    <div>
      <header className="page-headers">
          <h1 className="header-name"> Build Up Events </h1>
        </header>

        <div className='date-header-events'>19<sup>th</sup> to 23<sup>th</sup> June 2021</div>
    </div>
  )
}

