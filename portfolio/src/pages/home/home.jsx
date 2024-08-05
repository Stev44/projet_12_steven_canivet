import Hero from '../../components/Hero/hero'
import Projects from '../../components/Projects/projects'
import About from '../../components/About/about'
import Course from '../../components/Course/course'
import Contact from '../../components/Contact/contact'
import './home.scss'

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Course />
      <Contact />
    </main>
  )
}

export default Home
