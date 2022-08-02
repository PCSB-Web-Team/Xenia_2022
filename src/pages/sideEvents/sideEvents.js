import "./sideEvent.css";

import React from 'react'

export default function SideEvents() {

        const data = [
          {
            id:1,
            eventTitle: "EventName1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis sequi molestiae eaque fugit sit, reiciendis dolorem ullam modi! Repellendus quisquam ipsam laboriosam velit? Minima eveniet, eum nesciunt veniam excepturi possimus praesentium. Quasi sapiente ullam alias beatae mollitia incidunt cupiditate! Iusto, ",
            img: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
          },
          {
            id:2,
            eventTitle: "EventName2",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis sequi molestiae eaque fugit sit, reiciendis dolorem ullam modi! Repellendus quisquam ipsam laboriosam velit? Minima eveniet, eum nesciunt veniam excepturi possimus praesentium. Quasi sapiente ullam alias beatae mollitia incidunt cupiditate! Iusto, ",
            img: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
          },
        ];



const EventsInfo = data.map(event =>
  <div className="bg-white bg-opacity-0 rounded-lg shadow-2xl md:flex">
    <img src={event.img} alt="Laptop on Desk" className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none w-[210px] h-[220px]" />
    <div className="p-6">
      <h2 className="font-bold text-xl md:text-3xl mb-2 text-white">{event.eventTitle}</h2>
      <p className="text-white">
      {event.desc}
      </p>
    </div>

  </div>
)

return(
    <div className=" px-48 pt-12 pb-12 bg-black">
  <h3 className="text-white font-bold mb-4 text-4xl text-center font-sans pb-6">BuildUp Events</h3>
  <div className='vedant_great_hai border-solid border-2 rounded-2xl border-cyan-400'>
    {EventsInfo}
</div>
</div>

)
}
