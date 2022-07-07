import React from 'react'

function EventDay(props) {
    const renderEvents = props.eventsArray.map(event =>
        <div className="each-event">
            <p>{event.name}</p>
            <p>{event.desc}</p>
        </div>
    )

    return (
        <div className="event-day">
            <h4 className="event-day-date">{props.dayNumber}</h4>
            <div className="event-date-hex">
                <div className="hex">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="event-date-hex-bg"></div>
                <div className="hex">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="events-row">
                {renderEvents}
            </div>
        </div>
    )
}

export default EventDay;