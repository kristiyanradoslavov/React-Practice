import { useState } from "react";

import Decrement from "./Decrement";
import Clear from "./Clear";
import Increment from "./Increment";

export default function Movie(props) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [count, changeCount] = useState(0);

    setTimeout(() => {
        if (seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0);
        } else {

            setSeconds(seconds + 1);
        }

    }, 1000);


    const incrementCount = () => {
        changeCount(oldCount => oldCount + 1);

    }


    return (
        <header>
            <h1>
                <li>{props.title}</li>
                <li> {props.actors}</li>
                <li>{props.bookAuthor}</li>
            </h1>

            <h2>
                current time is {minutes}:{seconds}
            </h2>

            <h3>
                <p>Count: {count}</p>
                <Decrement changeFunc={changeCount} currentCount={count}>
                    <span>-</span>
                </Decrement>

                <Clear changeFunc={changeCount} />

                <Increment incrementFunc={incrementCount}>
                    <span>+</span>
                </Increment>

            </h3>
        </header>
    );
}