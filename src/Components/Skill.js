import React from 'react'
import forex from '../Images/forex1.jpg'

const Skill = () => {
  return (
    <div className="about">
            <div class="cover"></div>
            
            
            <div className="about-c skills">
                
                <div className="about-txt" data-aos="zoom-in-up" data-aos-duration="2000">
                    <h2>My Skills</h2>
                    <div className="bars" >
                        <h5>Astute Analytical Mind</h5>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                    </div>
                    <div className="bars">
                        <h5>Record Keeping</h5>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                    </div>
                    <div className="bars">
                        <h5>Diligence</h5>
                        <div className="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                    </div>
                    <div className="bars">
                        <h5>Mental Stability and Stamina</h5>
                        <div class="progress">
                            <div class="progress-bar p-" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                    </div>

                    
                </div>

                <div className="skill" data-aos="flip-up">
                    <img src={forex} alt=""/>
                </div>
            </div>
        </div>
  )
}

export default Skill