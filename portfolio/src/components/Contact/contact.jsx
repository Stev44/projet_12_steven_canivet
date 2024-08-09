import './contact.scss'
import { ReactComponent as Email } from '../../assets/mail.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    firstName: '',
    subject: '',
    email: '',
    message: '',
  })

  const [confirm, setConfirm] = useState('')
  const [confirmVisible, setConfirmVisible] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_portfolio', // Remplace par ton Service ID
        'template_portfolio', // Remplace par ton Template ID
        formState,
        'QeBm7uGs-Rbgo1Hq7' // Remplace par ton User ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setFormState({
          name: '',
          firstName: '',
          subject: '',
          email: '',
          message: '',
        })
        setConfirm('Le message à bien été envoyé')
        setConfirmVisible(true)
        setTimeout(() => {
          setConfirmVisible(false)
        }, 10000)
      })
      .catch((err) => {
        console.error('FAILED...', err)
        setConfirm(
          `En raison d'une erreur le message ne s'est pas envoyé correctement`
        )
        setConfirmVisible(true)
        setTimeout(() => {
          setConfirmVisible(false)
        }, 10000)
      })
  }

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
        <form className="form" onSubmit={handleSubmit}>
          <div className="wrapper">
            <div className="wrapper_container">
              <div className="wrapper_container_inputs">
                <label className="label"></label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="wrapper_container_inputs">
                <label className="label"></label>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  placeholder="Firstname"
                  value={formState.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="wrapper_container_inputs">
                <label className="label"></label>
                <input
                  className="input"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="wrapper_container_inputs">
                <label className="label"></label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="wrapper_message">
              <label className="label"></label>
              <textarea
                className="textarea"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="button" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} className="button_icon" />
          </button>
        </form>
        <div>
          <p>{confirmVisible && confirm}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
