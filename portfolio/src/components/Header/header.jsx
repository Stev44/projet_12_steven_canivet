import { Link } from 'react-router-dom'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setToggle } from '../../store/reducers'
import { ReactComponent as Paint } from '../../assets/paint.svg'
import { ReactComponent as ArrowUp } from '../../assets/arrowUp.svg'
import React, { useEffect, useState } from 'react'

const Header = React.memo(() => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.switch.language)
  const modes = ['normal', 'green', 'purple', 'yellow', 'blue', 'multi']
  const colorMode = useSelector((state) => state.switch.mode)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', colorMode)

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
  }, [colorMode])

  const scrollToHero = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })
  }

  const setMode = (mode) => {
    document.querySelector('body').setAttribute('data-theme', mode)
  }

  const handleClick = () => {
    const modeIndex = (modes.indexOf(colorMode) + 1) % modes.length
    const newMode = modes[modeIndex]
    dispatch(setToggle({ mode: newMode }))
    setMode(newMode)
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
          <button className="nav_links_button" onClick={handleClick}>
            <Paint className="paint icon" />
          </button>
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
