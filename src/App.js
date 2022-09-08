import './App.css'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer className="footer" />
    </div>
  )
}

export default App
