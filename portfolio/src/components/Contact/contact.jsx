import './contact.scss'
import { ReactComponent as Email } from '../../assets/mail.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <section className="contact padding" id="contact">
      <h2 className="underline">CONTACT ME</h2>
      <div className="contact_group margin">
        <div className="contact_group_infos">
          <div className="contact_group_infos_text">
            <Email className="contact_group_infos_text_icon" />
            <p>: steven.pro@gmail.com</p>
          </div>
          <div className="contact_group_infos_text">
            <Phone className="contact_group_infos_text_icon" />
            <p>: +33 06 47 01 30 99</p>
          </div>
        </div>
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
          <button className="button">
            <FontAwesomeIcon icon={faPaperPlane} className="button_icon" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
