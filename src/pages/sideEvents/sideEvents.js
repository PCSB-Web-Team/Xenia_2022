import "./sideEvent.css";

import React from 'react'

export default function SideEvents() {

        const data = [
          {
            id:1,
            eventTitle: "EventName1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis sequi molestiae eaque fugit sit, reiciendis dolorem ullam modi! Repellendus quisquam ipsam laboriosam velit? Minima eveniet, eum nesciunt veniam excepturi possimus praesentium. Quasi sapiente ullam alias beatae mollitia incidunt cupiditate! Iusto, ",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5c95d031973881.5669d0f5dbd49.jpg",
          },
          {
            id:2,
            eventTitle: "EventName2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis sequi molestiae eaque fugit sit, reiciendis dolorem ullam modi! Repellendus quisquam ipsam laboriosam velit? Minima eveniet, eum nesciunt veniam excepturi possimus praesentium. Quasi sapiente ullam alias beatae mollitia incidunt cupiditate! Iusto, ",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5c95d031973881.5669d0f5dbd49.jpg",
          },
        ];

  const EventsInfo = data.map(event =>
    <li>
      <h1 className="event-heading text-4xl py-7 px-11">{event.eventTitle}</h1>
      <div className="obj-flexing pb-6">
        <div>
        <p className="event-desc pl-11">{event.desc}</p>
        </div>
        <div className="px-10">
        <img className="img-sd " src={event.img} alt="" />
        </div>
      </div>
    </li>
)
  return (
    <div className="body-sd">
      <header className="page-headers">
          <h1 className="header-name"> Build Up Events </h1>
        </header>

        <div className='date-header-events'>22<sup>nd</sup> to 24<sup>th</sup> August 2022</div>


        <ul>
          {EventsInfo}
        </ul>
    </div>
  )
}

