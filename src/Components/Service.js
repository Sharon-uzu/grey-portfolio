import React from 'react'
import m1 from '../Images/Forex Chart on Yacht.jpeg'
import { IoMdAnalytics } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { PiPresentationChartBold } from "react-icons/pi";


const Service = () => {
  return (
    <div class="about sers">
            <div class="cover"></div>
            <div class="logo">
                <div class="menu">
                    <img src="../assets/images/Hamburger Menu.svg" alt="" id="menubar" />
                    <img src="../assets/images/close-removebg-preview.png" alt="" id="closebar"/>
                </div>
            </div>
            
            <div class="services">
                <h2>Services I Offer</h2>
               


                <div className="service-section">
                    <img src={m1} alt="" />
                    <div className="serv-s-r">

                        <div className="serv-s-card">
                            <div className="serv-cc">
                                <div className="s-icon">
                                    <IoMdAnalytics className='s-i'/>
                                </div>
                                <div className="s-txt">
                                    <h3>Forex Market Analyst</h3>
                                    <p>The use of professionals technical, fundamental, and quantitative analysis for better results.</p>
                                </div>
                            </div>
                        </div>

                        <div className="serv-s-card">
                            <div className="serv-cc">
                                <div className="s-icon">
                                    <FaChalkboardTeacher className='s-i'/>
                                </div>
                                <div className="s-txt">
                                    <h3>Professional Forex Mentor</h3>
                                    <p>Providing educational seminars and webinarsto help clients get more comfortable with forex trading.</p>
                                </div>
                            </div>
                        </div>

                        <div className="serv-s-card">
                            <div className="serv-cc">
                                <div className="s-icon">
                                    <MdManageAccounts className='s-i'/>
                                </div>
                                <div className="s-txt">
                                    <h3>Forex Account Manager</h3>
                                    <p>Manage forex accounts, make trade decisions and executes trades based on client's goals and risk tolerance.</p>
                                </div>
                            </div>
                        </div>

                        <div className="serv-s-card">
                            <div className="serv-cc">
                                <div className="s-icon">
                                    <PiPresentationChartBold className='s-i'/>
                                </div>
                                <div className="s-txt">
                                    <h3>Currency Analyst/ Researchers</h3>
                                    <p>Performs research and analysis on economic and political issues that affects currency values.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
           
        </div>
  )
}

export default Service