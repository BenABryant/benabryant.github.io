export interface Game {
    id: string
    title: string
    description: string
    players: string
    rules: string
}

export const GAMES: Game[] = [
  {
    id:          "tictactoe",
    title:       "Tic-Tac-Toe",
    description: "Players take turns marking squares in a grid trying to get 3 in a row",
    players:     "2 players",
    rules: "You and an opponent will alternate placing marks in the square. You may only place a mark in a square that is empty. Click on a square to place your mark ('X' or 'O').",
  },
]