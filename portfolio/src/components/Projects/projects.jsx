import './projects.scss'
import content from '../../features/contentProject/contentProject'

const Projects = () => {
  return (
    <section className="projects padding" id="projects">
      <div className="projects_wrapper margin">
        <h2 className="underline">MY PROJECTS</h2>
        <div className="wrapper">
          {content.map((item, index) => (
            <div className="card" key={index}>
              <div className="card_img">
                <div className="img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="container">
                  <div className="card_img_technologies">
                    {item.technologies.map((TechIcon, idx) => (
                      <TechIcon key={idx} className="icon" />
                    ))}
                  </div>
                  <div className="card_img_description">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
