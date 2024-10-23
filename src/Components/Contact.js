import React from 'react'
import mail from '../Images/mail imgb.png'
import phone from '../Images/phones-removebg-preview.png'

const Contact = () => {
  return (
    <div className="about">
            <div className="cover"></div>
            <div className="logo">
                
            </div>
            
            <div className="services con">
                <h2>Contact Me</h2>
                <form id="form">
                    <div className="serv">
                        <div className="contact">
                            <input type="text" name="name" id="full" placeholder="Enter Full Name"/><br/>
                            <input type="email" name="email" id="mail" placeholder="Enter E-mail"/><br/>
                            <input type="tel" name="phone" id="tel" placeholder="Phone Number"/><br/>
                            <textarea name="message" id="text" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>

                    </div>

                    <div class="s-button">
                        <button type="submit">Send</button>
                    </div>
                </form>

                    <div class="reach">
                        <div class="reach1">
                            <a href="tel:+2349067727167"><img src={phone} alt=""/></a><br/>
                            <a href="tel:+2349067727167">+234 906 772 7167</a>
                        </div>

                        <div class="reach1">
                            <a href="mailto:"><img src={mail} alt=""/></a><br/>
                            <a href="mailto:">grey@gmail.com</a>
                        </div>
                    </div>
                
                
            </div>
            
        </div>
  )
}

export default Contact
            