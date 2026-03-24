import PageLayout from "../components/PageLayout"
import GameCard from "../components/GameCard"
import { GAMES } from "../data/games"
import "./GamesPage.css"


export default function GamesPage() {
  return (
    <PageLayout>
      <section className="games-page">
        <div className="section__inner">
          <h1>Games</h1>
            <p className="games-page__lead">
              Some games I enjoy and wanted to code. 
            </p>
          <div className="games-page__grid">
            {GAMES.map((game) => (
              <GameCard game={game} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}