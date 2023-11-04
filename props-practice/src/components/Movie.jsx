import { useState } from "react";

import Decrement from "./Decrement";
import Clear from "./Clear";
import Increment from "./Increment";

export default function Movie(props) {
    const [time, setTime] = useState(0);
    const [count, changeCount] = useState(0);

    setTimeout(() => {
        setTime(time + 1);

    }, 1000);


    return (
        <header>
            <h1>
                <li>{props.title}</li>
                <li> {props.actors}</li>
                <li>{props.bookAuthor}</li>
            </h1>

            <h2>
                current time is {time}
            </h2>

            <h3>
                <p>Count: {count}</p>
                <Decrement changeFunc={changeCount} currentCount={count} />
                <Clear changeFunc={changeCount} />
                <Increment changeFunc={changeCount} currentCount={count} />

            </h3>
        </header>
    );
}