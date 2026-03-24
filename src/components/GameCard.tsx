import { Game } from "../data/games";
import { useNavigate } from "react-router-dom"
import "./GameCard.css"


export default function GameCard({ game }: { game: Game }) {
    const navigate = useNavigate()
    return (
    <button
        key={game.id}
        className="games-card icon-btn"
        onClick={() => navigate(`/games/${game.id}`)}
    >
        <h3 className="games-title">{game.title}</h3>
        <p className="games-desc">{game.description}</p>
        <span className="games-players">{game.players}</span>
    </button>
    )
}