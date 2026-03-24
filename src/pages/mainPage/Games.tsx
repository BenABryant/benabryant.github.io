import { Link } from 'react-router-dom'
import { GAMES } from '../../data/games'
import GameCard from '../../components/GameCard'
import { FaArrowRight } from 'react-icons/fa'
import './Games.css'

export default function Games() {
  const featured = GAMES.slice(0)

  return (
    <section className="games section" id="games">
      <div className="section__inner">
        <h2>Games</h2>
        <div className="games__grid">
          {featured.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <Link to="/games" className="games__view-all">
          View all games <FaArrowRight />
        </Link>
      </div>
    </section>
  )
}