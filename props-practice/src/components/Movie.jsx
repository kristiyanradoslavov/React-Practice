import { useState } from "react";

export default function Movie(props) {
    const [time, setTime] = useState(0);
    const [count, changeCount] = useState(0)

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
                <button onClick={() => changeCount(count + 1)}>
                    Click this for action
                </button>
            </h3>
        </header>
    );
}