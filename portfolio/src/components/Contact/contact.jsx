import './contact.scss'
import { ReactComponent as Download } from '../../assets/dl.svg'

const Contact = () => {
  return (
    <section className="contact padding" id="contact">
      <h2 className="underline">CONTACT ME</h2>
      <div className="contact_group margin">
        <form className="form">
          <div className="wrapper">
            <div className="wrapper_container">
              <div className="wrapper_container_inputs">
                <label className="label"></label>
                <input className="input" type="text" placeholder="Name" />
              </div>
              <div className="wrapper_container_inputs">
                <label className="label"></label>
                <input className="input" type="text" placeholder="Firstname" />
              </div>
              <div className="wrapper_container_inputs">
                <label className="label"></label>
                <input className="input" type="text" placeholder="Object" />
              </div>
              <div className="wrapper_container_inputs">
                <label className="label"></label>
                <input className="input" type="text" placeholder="Email" />
              </div>
            </div>
            <div className="wrapper_message">
              <label className="label"></label>
              <textarea className="textarea" />
            </div>
          </div>
          <button className="button">Send</button>
        </form>
        <div className="skills_cv">
          <p className="skills_cv_text">Download my CV</p>
          <button className="cv">
            <Download className="cv_icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
