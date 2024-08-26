import './course.scss'
import tech from '../../features/tech/tech'
import { ReactComponent as Degree } from '../../assets/degree2.svg'

const Course = () => {
  return (
    <section className="course padding" id="course">
      <div className="course_container margin">
        <h2 className="underline">MY COURSE</h2>
        <div className="wrapper">
          <div className="wrapper_course">
            <div className="infos">
              <h4>Formation développeur web</h4>
              <h5>Open Classrooms</h5>
              <p>2023-2024</p>
              <Degree className="icon" />
            </div>
            <div className="infos">
              <h4>BTS Commerce International</h4>
              <h5>Lycée Nelson Mandela</h5>
              <p>2018-2020</p>
              <Degree className="icon" />
            </div>
            <div className="infos">
              <h4>Baccalaureat STMG</h4>
              <h5>Lycée La Herdrie</h5>
              <p>2015-2018</p>
              <Degree className="icon" />
            </div>
          </div>
          <div className="line"></div>
          <div className="skills">
            <div className="skills_container">
              <div className="skills_container_map">
                {tech.map((item, index) => (
                  <item.icon
                    key={index}
                    className="skills_container_map_icons"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course
