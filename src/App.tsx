import Sidebar from './components/Sidebar'
import About from './components/About'
import HeaderImage from './components/HeaderImage'
import Experience from './components/Experience'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <HeaderImage/>
        <About />
        <Experience />

        <Footer />
      </main>
    </div>
  )
}
