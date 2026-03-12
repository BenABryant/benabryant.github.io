import PageLayout from '../components/PageLayout'
import './NotFound.css'
 
export default function NotFound() {
  return (
    <PageLayout>
      <main className="notfound__main">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Page not found</h1>
        <p className="notfound__desc">
          That page doesn't exist — it may have moved or never existed.
        </p>
      </main>
    </PageLayout>
  )
}