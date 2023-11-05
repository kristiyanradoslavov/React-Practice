import { useEffect, useState } from "react"

function App() {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // useEffect(() => {
        
    // })

    const listNumbers = numbers.map((number, index) => {
        return <li key={index}>{number * 3}</li>
    });

    const [count, setCount] = useState(0);

    const countHandler = () => {
        setCount(oldCOunt => oldCOunt + 1)
    }

    const addNumberHandler = () => {
        numbers.push(1)
    }

    return (
        <div>
            <ul>
                {listNumbers}
            </ul>
            
            <p>Array: {numbers}</p>

            <p>Count: {count}</p>
            
            <button onClick={countHandler}>
                increase
            </button>

            <button onClick={addNumberHandler}>
                add Number
            </button>
        </div>
    )
}

export default App
