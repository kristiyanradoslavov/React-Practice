export default function Decrement(props) {

    return (
        <button onClick={() => props.changeFunc(props.currentCount - 1)}>-</button>
    );
}