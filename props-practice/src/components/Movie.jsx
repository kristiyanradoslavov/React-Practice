/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Movie(props) {
    const [time, setTime] = useState(0);

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
        </header>
    );
}