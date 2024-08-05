import './course.scss'
import brancard from '../../assets/brancard.jpg'
import code from '../../assets/code.png'
import study from '../../assets/study.jpg'
import commerce from '../../assets/commerce3.jpg'
import { ReactComponent as Degree } from '../../assets/degree2.svg'
import { ReactComponent as Cv } from '../../assets/cvdefou.svg'
import myFile from '../../assets/cvdefou.svg'

const Course = () => {
  return (
    <section className="course padding" id="content">
      <div className="course_container margin">
        <h2 className="title">My course</h2>
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
          <div className="wrapper_img">
            <div className="cv img">
              <h5>Download my CV</h5>
              <a href={myFile} download="myFile.svg" className="cv_button">
                <Cv className="cv_button_icon" />
              </a>
            </div>
            <div className="code img">
              <img src={code} alt='code'/>
            </div>
            <div className="brancard img">
              <img src={brancard} alt='brancardiers' />
            </div>
            <div className="commerce img">
              <img src={commerce} alt='commerce international'/>
            </div>
            <div className="study img">
              <img src={study} alt='étude'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course
