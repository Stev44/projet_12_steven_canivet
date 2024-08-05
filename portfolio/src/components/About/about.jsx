import './about.scss'
import tech from '../../features/tech/tech'
import ParticlesComponent from '../Particles/particles'

const About = () => {
  return (
    <section className="about padding" id="content">
      <ParticlesComponent />
      <h2 className="about_title">ABOUT ME</h2>
      <div className="about_content">
        <div className="about_text">
          <p>
            Je suis Steven Canivet, développeur, designer & music producer situé
            en France.
          </p>
          <p>
            Ayant un parcours atypique, j’ai travaillé ces domaines de façon
            autodidacte pendant plusieurs années développant un amour
            particulier pour le développement, notamment pour la sécurité
            informatique et l’intelligence artificielle.
          </p>
          <p>
            Je suis également designer, ce qui me permet d’associer l’une de mes
            passions à mon travail actuel de développeur web & d’application
            fullstack et créer des interfaces sobres, épurées et modernes.
          </p>
          <p>
            En parallèle, je suis producteur de musique (dit “music producer”)
            étant tout particulièrement attiré professionnellement par le monde
            musical du jeu vidéo.
          </p>
        </div>
        <div className="skills">
          <div className="skills_container">
            <div className="skills_container_map">
              {tech.map((item, index) => (
                <item.icon key={index} className="skills_container_map_icons" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
