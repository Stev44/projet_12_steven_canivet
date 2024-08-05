import { Link } from 'react-router-dom'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setToggle } from '../../store/reducers'
import { ReactComponent as Moon } from '../../assets/moon.svg'
import { ReactComponent as Light } from '../../assets/light.svg'
import { ReactComponent as ArrowUp } from '../../assets/arrowUp.svg'
import React, { useEffect, useState } from 'react'

const Header = React.memo(() => {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.switch.mode)
  const language = useSelector((state) => state.switch.language)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollVisible = 200

      if (window.scrollY > scrollVisible) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToHero = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header>
      <nav className="nav">
        <Link to={'/'}>
          <h1 className="nav_title">
            Steven <strong className="nav_title_highlight">Canivet</strong>
          </h1>
        </Link>
        <div className="nav_links">
          <Link to={'/'}>Projects</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Course</Link>
          <Link to={'/'}>Contact</Link>
          <div className="nav_links_language">
            <p>FR</p>
            <label className="nav_links_language_switch">
              <input
                type="checkbox"
                checked={language !== undefined ? language : false}
                onChange={(e) => {
                  dispatch(setToggle({ language: e.target.checked }))
                }}
              />
              <span></span>
            </label>
            <p>EN</p>
          </div>
          {!mode ? (
            <button
              className="nav_links_button"
              onClick={() => {
                dispatch(setToggle({ mode: true }))
              }}
            >
              <Moon className="moon icon" />
            </button>
          ) : (
            <button
              className="nav_links_button"
              onClick={() => {
                dispatch(setToggle({ mode: false }))
              }}
            >
              <Light className="sun icon" />
            </button>
          )}
        </div>
        <button
          onClick={scrollToHero}
          className={`back ${visible ? 'visible' : ''}`}
        >
          <ArrowUp className="arrow" />
        </button>
      </nav>
    </header>
  )
})

export default Header
