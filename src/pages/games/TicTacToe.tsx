import "./TicTacToe.css"

export default function TicTacToe({ state, sendMove }: { state: any, sendMove: (move: number) => void }) {
  if (!state) return <div>Loading...</div>
  const board: (string | null)[] = state.board
  const winner: string | null = state.winner  

  const statusText = () => {
    if (winner)               return "Winner: " + winner
    if (board.every(Boolean)) return "It's a draw!"
    else                      return ""
  }

  return (
    <div className="ttt">

      <p className={`ttt__status`}>
        {statusText()}
      </p>

      <div className="ttt__board">
        {board.map((cell, i) => (
          <button
            key={i}
            className={`ttt__cell ${cell ? `ttt__cell--${cell}` : ""}`}
            onClick={() => sendMove(i)}
            disabled={!!cell || !!winner}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  )
}