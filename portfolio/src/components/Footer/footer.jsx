import './footer.scss'
import { Link } from 'react-router-dom'
import { socialMedia } from '../../features/features'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    const offSet = 60
    const getPosition = element.getBoundingClientRect().top
    const setOffSet = getPosition + window.scrollY - offSet

    window.scrollTo({ top: setOffSet, behavior: 'smooth' })
  }
  return (
    <footer>
      <div className="footer_links">
        <Link onClick={() => scrollToSection('projects')}>Projects</Link>
        <Link onClick={() => scrollToSection('about')}>About</Link>
        <Link onClick={() => scrollToSection('course')}>Course</Link>
        <Link onClick={() => scrollToSection('contact')}>Contact</Link>
      </div>
      <div className="footer">
        {socialMedia.map((item, index) => (
          <a key={index} href={item.link}>
            <span className="footer_icon">{item.icon}</span>
          </a>
        ))}
      </div>

      <p>© Steven Canivet | All Rights Reserved</p>
    </footer>
  )
}

export default Footer
