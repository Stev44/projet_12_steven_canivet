import './contact.scss'

const Contact = () => {
  return (
    <section className="contact padding" id="content">
      <h2>Contact Me</h2>
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
    </section>
  )
}

export default Contact
