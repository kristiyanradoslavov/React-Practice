import './styles.css'

import Header from './components/Header'
import Footer from './components/Footer'
import UsersContainer from './components/UsersContainer'

function App() {

    return (
        <div>
            <Header />

            <main className="main">
                <UsersContainer />
            </main>
            
            <Footer />
        </div>
    )
}

export default App
