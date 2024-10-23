import React from 'react'
import m2 from '../Images/grey2.jpeg'

const About = () => {
  return (
        <div className="about">
            <div className="cover"></div>
            <div className="logo">
                
            </div>
            <div className="about-c">
                <div className="about-img" data-aos="zoom-in" data-aos-duration="2000">
                    <img src={m2} alt=""/>
                </div>
                <div className="about-txt">
                    <h2>ABOUT <span style={{color: "#b606b6"}}> Mr Grey</span></h2>
                    <p>I'm David Grey, a Business Concept Developer and a Certified Forex Trader with some years of experience. I successfully passed both phases of MyForexFunds evaluation program. Beside Forex, i am interested in tech, reading, solving puzzles and love maintaining a healthy lifestyle. </p>
                    <div className="numbers">
                        <div className="one"  data-aos="zoom-in" data-aos-duration="2000">
                            <h4><span>5+</span> Years of experience</h4>
                            <p></p>
                        </div>

                        <div className="one" data-aos="zoom-in-up" data-aos-duration="2000">
                            <h4><span>10+</span> Accounts managed</h4>
                            <p></p>
                        </div>
                    </div>
                    <a href="#contact"><button>Contact me</button></a>
                </div>
            </div>
        </div>
  )
}

export default About