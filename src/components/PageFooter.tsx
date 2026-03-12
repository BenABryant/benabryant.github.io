import './PageFooter.css'
import {FaArrowUp} from 'react-icons/fa'

export default function PageFooter() {
  return (
    <section className="footer">
      <div className="section__inner footer__inner">
        <p className="footer_text">
          © {new Date().getFullYear()} Ben Bryant. Built with Vite and React.
        </p>
        <a href="#" className="footer__back">
          Back to top <FaArrowUp />
        </a>
      </div>
    </section>
  )
}