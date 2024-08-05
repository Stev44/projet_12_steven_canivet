import './hero.scss'
import Socials from '../socials/socials'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ParticlesComponent from '../Particles/particles'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    const yOffset = -60
    const yPosition =
      element.getBoundingClientRect().top + window.scrollY + yOffset

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    })
  }
  return (
    <section className="hero" id="hero">
      <ParticlesComponent id="particles" />
      <div className="hero_wrapper margin">
        <div className="container">
          <div className="wrapper">
            <p className="wrapper_welcome">Hey there ! Im,</p>
            <h1 className="wrapper_title">Steven</h1>
            <p className="wrapper_description">
              <strong>Front-end developer.</strong>
              <br />
              Passionate by creating and designs
            </p>
            <Socials />
            <button className="wrapper_button">Contact me</button>
          </div>
          <div className="profile">
            <div className="profile_img"></div>
          </div>
        </div>
        <button className="button" onClick={scrollToProjects}>
          <Arrow className="button_arrow" />
        </button>
      </div>
    </section>
  )
}

export default Hero
