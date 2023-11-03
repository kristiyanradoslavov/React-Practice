/* eslint-disable react/prop-types */
export default function Movie(props) {
    return (
        <header>
            <h1>
                <li>{props.title}</li>
                <li> {props.actors}</li>
                <li>{props.bookAuthor}</li>
            </h1>

        </header>
    );
}