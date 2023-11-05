import { useEffect, useState } from "react"

function App() {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const listNumbers = numbers.map((number, index) => {
        return <li key={index}>{number * 3}</li>
    });
    



    return (
        <div>
            <ul>
                {listNumbers}
            </ul>

            <button>
                increase
            </button>
        </div>
    )
}

export default App
