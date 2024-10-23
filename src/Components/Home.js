import React from 'react'
import  Typewriter  from 'typewriter-effect';
import { FaGraduationCap } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";


const Home = ({handleToggle}) => {
  return (
    <div className="about">
        <div className="cover"></div>
          <div className="logo">
            <div className="open">
                <RiMenu2Fill className='open-i' onClick={handleToggle}/>
            </div>
            <a href="">
              <h2>Grey</h2>
            </a>
          </div> 
        <div className="intro">
            <h3>Hi, I'm <span className="span">Mr Grey</span> </h3>
            <h6><span className="auto-input"><Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings:[
                        "A Profitable Forex Trader",
                        "A Forex Market Analyst",
                        "A Business concept Developer",
                        "Welcome to my page",
                      ],
                  }}
                  /></span></h6>

            <div className="info">
                <div className="info-c">
                    <div className="each">
                        <div className="icons">
                            <FaGraduationCap className='e-i'/>
                        </div>
                        
                        <div className='txt'>
                            <p>5K</p>
                            <p>Happy Students</p>
                        </div>
                    </div>

                    <div className="each">
                        <div className="icons">
                            <MdAccountBalanceWallet className='e-i'/>
                        </div>
                        
                        <div className='txt'>
                            <p>2K</p>
                            <p>Accounts Managed</p>
                        </div>
                    </div>

                    <div className="each">
                        <div className="icons">
                            <FaBook className='e-i'/>
                        </div>
                        
                        <div className='txt'>
                            <p>10+</p>
                            <p>Courses</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
                   
    </div>
  )
}

export default Home