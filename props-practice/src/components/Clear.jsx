export default function Clear(props) {
    return (
        <button onClick={() => props.changeFunc(0)}>
            clear
        </button>
    );
}