import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { FaSun, FaMoon, FaArrowLeft } from 'react-icons/fa'
import { Game } from '../data/games'
import './PageHeader.css'
import './GameHeader.css'

type GameHeaderProps = {
  game: Game
}

export default function GameHeader({ game }: GameHeaderProps) {
  const { dark, toggle } = useTheme()

  return (
    <header className="page-header">
      <Link to="/games" className="page-header__back">
        <FaArrowLeft /> Games
      </Link>

      <Link to={`/games/${game.id}`} className="page-header__name">
        {game.title}
      </Link>

      {/* rules and new game, make header thicker, add hooks for these */}

      <button className='game-header__rules' onClick={() => alert(game.rules)} aria-label="View game rules">
        Rules
      </button>

      <button className="page-header__theme icon-btn" onClick={toggle} aria-label="Toggle dark mode">
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  )
}