import { useEffect, useState } from 'react';
import './countdownTimer.css';

function Timer() {
    const remainingTime = () => {
        const timeDifference = new Date(`08/22/2022`) - +new Date();
        let timeLeft = {}

        if (timeDifference > 0) {
            timeLeft = {
                days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((timeDifference / 1000 / 60) % 60),
                seconds: Math.floor((timeDifference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(remainingTime());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(remainingTime());
        }, 1000);

        return () => clearTimeout(timer);
    })

    let countdownComponent = []
    const countdownDigits = []
    Object.keys(timeLeft).forEach((interval, index) => {
        if (timeLeft[interval] === 0) {
            countdownDigits.push("00");
            return;
        }

        timeLeft[interval].toString().length === 2 ?
            countdownDigits.push(timeLeft[interval].toString()[0] + timeLeft[interval].toString()[1])
            :
            countdownDigits.push("0" + timeLeft[interval].toString()[0])
    });

    const countdownNotations = ["days", "hours", "minutes", "seconds"]

    countdownComponent = countdownDigits.map((eachDigit, index) => (
        <li><span>{eachDigit}</span>{countdownNotations[index]}</li>
    ))

    return (
        <div className="countdownComponent">
            {/* <ul>
                {countdownComponent}
            </ul> */}
            {countdownComponent.length ? countdownComponent : "Event is LIVE !"}
        </div>
    )
}

export default Timer;