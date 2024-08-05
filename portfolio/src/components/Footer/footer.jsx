import './footer.scss'
import { Link } from 'react-router-dom'
import { socialMedia } from '../../features/features'

const Footer = () => {
  return (
    <footer>
      <div className="footer_links">
        <Link to={'/'}>Projects</Link>
        <Link to={'/'}>About</Link>
        <Link to={'/'}>Course</Link>
        <Link to={'/'}>Contact</Link>
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
