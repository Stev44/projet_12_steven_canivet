import './hero.scss'
import Socials from '../socials/socials'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ParticlesComponent from '../Particles/particles'
import profile from '../../assets/profil.jpg'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    const offSet = 60
    const getPosition = element.getBoundingClientRect().top
    const setOffSet = getPosition + window.scrollY - offSet

    window.scrollTo({ top: setOffSet, behavior: 'smooth' })
  }
  return (
    <section className="hero" id="hero">
      <ParticlesComponent />
      <div className="hero_wrapper margin">
        <div className="container">
          <div className="wrapper">
            <p className="wrapper_welcome">Hey there ! Im,</p>
            <h1 className="wrapper_title">Steven</h1>
            <p className="wrapper_job">
              <strong>Front-end junior developer.</strong>
            </p>
            <p className="wrapper_description">
              Passionate by creating and designs
            </p>
            <Socials />
            <button className="wrapper_button">Contact me</button>
          </div>
          <div className="profile">
            <img src={profile} alt="Steven Canivet" className="profile_img" />
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
