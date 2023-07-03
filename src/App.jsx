import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import AboutDetails from './components/AboutDetails'
import Skills from './pages/Skills'
import Educational from './components/Educational'
import Contact from './pages/Contact'

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
      <AboutDetails></AboutDetails>
      <Skills></Skills>
      <Educational></Educational>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
