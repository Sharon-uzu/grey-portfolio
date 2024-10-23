import React, { useEffect, useState } from 'react';
import './App.css';
import m1 from './Images/grey2.jpeg';
import fb from './Images/940-9402277_facebook-icon-link-facebook-white-icon-removebg-preview.png';
import tw from './Images/tt-removebg-preview.png';
import ins from './Images/instagram-removebg-preview.png';
import li from './Images/10-102671_linkedin-white-png-download-linkedin-icon-white-circle.png';
import About from './Components/About';
import Service from './Components/Service';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Home from './Components/Home';
import AOS from 'aos';
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


import 'aos/dist/aos.css'; // Import the AOS styles

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({ duration: 1000, once: true }); // Animation duration and once parameter to trigger only once
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [toggle, setToggle] = useState(false);
  function handleToggle(){
    setToggle(!toggle)
  }

  return (
    <div>
      <header>
        <div className="h-l">
          <div className={toggle ? 'h-left h-active' : 'h-left'} id="link">
            
            
            <div className="pix">
              <div className="close">
                <IoClose className='close-i' onClick={handleToggle}/>
              </div>
              <img src={m1} alt="" />
              <h1>Mr Grey</h1>
              <nav>
                <ul>
                  <li>
                    <a href="#home" className={activeSection === 'home' ? 'active' : ''}>HOME</a>
                  </li>
                  <li>
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''}>ABOUT</a>
                  </li>
                  <li>
                    <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>SKILLS</a>
                  </li>
                  <li>
                    <a href="#services" className={activeSection === 'services' ? 'active' : ''}>SERVICES</a>
                  </li>
                  <li>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>CONTACT</a>
                  </li>
                </ul>

                <div className="icons">
                  <a href="" className="face">
                    {/* <img src={fb} alt="" /> */}
                    <FaFacebookF className='hh-i'/>
                  </a>
                  <a href="">
                    {/* <img src={tw} alt="" /> */}
                    <IoLogoTwitter className='hh-i'/>
                  </a>
                  <a href="">
                    {/* <img src={li} alt="" /> */}
                    <RiInstagramFill className='hh-i'/>
                  </a>
                  <a href="" className="ins">
                    {/* <img src={ins} alt="" /> */}
                    <FaLinkedinIn className='hh-i'/>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="h-right"  id="home">
          
          {/* Applying AOS animation to each section */}
          <section id="home" data-aos="fade-up">
            <Home handleToggle = {handleToggle}/>
          </section>

          <section id="about" data-aos="fade-up">
            <About />
          </section>

          <section id="skills" data-aos="fade-up">
            <Skill />
          </section>

          <section id="services" data-aos="fade-up">
            <Service />
          </section>

          <section id="contact" data-aos="fade-up">
            <Contact />
          </section>
        </div>
      </header>
    </div>
  );
};

export default App;
