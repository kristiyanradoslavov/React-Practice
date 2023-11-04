export default function Increment(props) {
    return (
        <button onClick={() => props.changeFunc(props.currentCount + 1)}>
            +
        </button>
    );
}