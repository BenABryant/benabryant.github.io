import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar       from './pages/mainPage/Sidebar'
import About         from './pages/mainPage/About'
import HeaderImage   from './pages/mainPage/HeaderImage'
import Experience    from './pages/mainPage/Experience'
import PageFooter    from './components/PageFooter'
import Skills        from './pages/mainPage/Skills'
import Projects      from './pages/mainPage/Projects'
import Games         from './pages/mainPage/Games'
import ProjectsPage  from './pages/ProjectsPage'
import GamesPage     from './pages/GamesPage'
import GameShell     from './pages/games/GameShell'
import NotFound      from './pages/NotFound'
import './App.css'

function HomePage() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <HeaderImage />
        <About />
        <Experience />
        <Projects />
        <Games />
        <Skills />
        <PageFooter />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                element={<HomePage />} />
        <Route path="/projects"        element={<ProjectsPage />} />
        <Route path="/games"           element={<GamesPage />} />
        <Route path="/games/:gameId"   element={<GameShell />} />
        <Route path="*"                element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
