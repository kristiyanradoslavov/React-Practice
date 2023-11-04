export default function Increment(props) {
    return (
        <button onClick={props.incrementFunc}>
            {props.children}
        </button>
    );
}