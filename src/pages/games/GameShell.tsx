import { useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { useGameSocket, GameError } from "../../hooks/useGameSocket"
import { Game, GAMES } from "../../data/games"
import GameHeader from "../../components/GameHeader"
import TicTacToe from "./tictactoe"
import "./GameShell.css"

const GAME_COMPONENTS: Record<string, React.ComponentType<any>> = {
  "tictactoe": TicTacToe,
}

type GamePhase = "entrance" | "lobby" | "playing"

export default function GameShell(): JSX.Element {
  // State
  const { gameId } = useParams<{ gameId: string }>()
  const [phase, setPhase] = useState<GamePhase>("entrance")
  const [roomId, setRoomId] = useState<string>("")
  const [inputValue, setInputValue] = useState<string>("")
  const [state, setState] = useState<any | null>(null)
  const [opponentLeft, setOpponentLeft] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const selectedGame = GAMES.find((g) => g.id === gameId)

  // Socket information for sending information
  const { createRoom, joinRoom, startGame, sendMove } = useGameSocket({
    onRoomCreated: (id) => {
      setRoomId(id)
      setPhase("lobby")
    },
    onPlayerJoined: () => {
      setPhase("lobby")
      setError(null)
    },
    onGameStarted: (state) => {
      setState(state)
      setPhase("playing")
      setError(null)
    },
    onMoveMade: (state) => { setState(state); setError(null) },
    onOpponentLeft: () => {setOpponentLeft(true) },
    onError: (e: GameError) => setError(e.message),
  })

  /* Redirect if no game found */
  if (!gameId || !GAME_COMPONENTS[gameId] || !selectedGame) {
    return <Navigate to="/games" replace />
  }

  const GameComponent = GAME_COMPONENTS[gameId]

  const handleCreate = () => {
    createRoom(gameId)
  }

  const handleJoin = () => {
    const id = inputValue.trim().toUpperCase()
    if (!id) return
    setRoomId(id)
    joinRoom(id)
  }

  /**TODO: separate these into their own files */
  /* Either create a game or join one via a code */
  function entrance(): JSX.Element {
    return (<>
      <div className="game-shell__actions">
        <button className="icon-btn game-shell__btn" onClick={handleCreate}>
          Create Room
        </button>
        <div className="game-shell__join">
          <input
            className="game-shell__input"
            placeholder="Room code"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleJoin()}
            maxLength={8}
          />
          <button className="icon-btn game-shell__btn" onClick={handleJoin}>
            Join Room
          </button>
        </div>
      </div>
      <p className="game-shell__subtitle">
        Create a room and share the code, or join an existing one.
      </p>
    </>)
  }

  /* Waiting for players */
  function lobby(): JSX.Element {
    return (<><p className="game-shell__subtitle">
      Share this code with other players:
    </p><div className="game-shell__code">{roomId}</div><div><button className="icon-btn game-shell__btn" onClick={startGame}>
        Start Game
      </button></div></>)
  }

  /* actively playing */
  function playing(): JSX.Element {
    if (opponentLeft) {
      return (
        <div className="game-shell__notice">
          <p>Opponent disconnected.</p>
          <button className="icon-btn" onClick={() => window.location.reload()}>
            Back to Entrance
          </button>
        </div>
      )
    } else {
      return (
        <GameComponent
          state={state}
          sendMove={sendMove}
        />
      )
    }
  }

  return (
    <div className="page-layout">
      <GameHeader game={selectedGame} />
      <main className="game-shell">
        {error && <p className="game-shell__error">{error}</p>}
        {phase === "lobby" && lobby()}
        {phase === "playing" && playing()}
        {phase === "entrance" && entrance()}
      </main>
    </div>
  )
}