import { useState } from 'react'
import './App.css'

import Movie from './components/Movie'

function App() {

    return (
        <div>

            <Movie
                title='HarryPotter'
                actors='Harry, Harmiony, Ron'
                bookAuthor='J.K. Rowling'
            />

            <main>

                <Movie
                    title="Hunger Games"
                    actors='Catnies Everdeen'
                    bookAuthor='Unknown'
                />

            </main>

            <footer>
                <h3>
                    This is the footer
                </h3>
            </footer>
        </div>
    )
}

export default App
