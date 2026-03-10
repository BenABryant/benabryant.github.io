import './Footer.css'

export default function Footer() {
  return (
    <section className="footer">
      <div className="section__inner footer__inner">
        <p className="footer_text">
          © {new Date().getFullYear()} Ben Bryant. Built with Vite and React.
        </p>
        <a href="#about" className="footer__back">
          Back to top ↑
        </a>
      </div>
    </section>
  )
}