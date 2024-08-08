import { Link } from 'react-router-dom'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setToggle } from '../../store/reducers'
import { ReactComponent as Paint } from '../../assets/paint.svg'
import { ReactComponent as ArrowUp } from '../../assets/arrowUp.svg'
import React, { useEffect, useState } from 'react'

const Header = React.memo(() => {
  const dispatch = useDispatch()
  const modes = ['normal', 'green', 'purple', 'yellow', 'blue']
  const colorMode = useSelector((state) => state.switch.mode)
  const [visible, setVisible] = useState(false)

  /* Permet d'afficher le bouton a 200px de scroll en dessous la section Hero et permet aussi d'attribuer le new mode de couleur au body a chaque changement de couleur */
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

  /* Permet de faire un scroll vers une ancre */

  const scrollToHeader = () => {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' })
  }

  const setMode = (mode) => {
    document.querySelector('body').setAttribute('data-theme', mode)
  }

  /* Permet de verifier l'index du mode de couleur en cours et de passer au suivant au click */
  const handleClick = () => {
    const modeIndex = (modes.indexOf(colorMode) + 1) % modes.length
    const newMode = modes[modeIndex]
    dispatch(setToggle({ mode: newMode }))
    setMode(newMode)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    const offSet = 60
    const getPosition = element.getBoundingClientRect().top
    const setOffSet = getPosition + window.scrollY - offSet

    window.scrollTo({ top: setOffSet, behavior: 'smooth' })
  }

  return (
    <header id="header">
      <nav className="nav">
        <Link to={'/'} onClick={() => scrollToSection('header')}>
          <h1 className="nav_title">
            Steven <strong className="nav_title_highlight">Canivet</strong>
          </h1>
        </Link>
        <div className="nav_links">
          <Link onClick={() => scrollToSection('projects')}>Projects</Link>
          <Link onClick={() => scrollToSection('about')}>About</Link>
          <Link onClick={() => scrollToSection('course')}>Course</Link>
          <Link onClick={() => scrollToSection('contact')}>Contact</Link>
          <button className="nav_links_button" onClick={handleClick}>
            <Paint className="paint" />
          </button>
        </div>
        <button
          onClick={scrollToHeader}
          className={`back ${visible ? 'visible' : ''}`}
        >
          <ArrowUp className="arrow" />
        </button>
      </nav>
    </header>
  )
})

export default Header
