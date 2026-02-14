import React from 'react';
import { ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <p className="section__subtitle">Who I am and what I do</p>

        <div className="about-content">
          <div className="about-text">
            <h3>I am an engineer. Also, I love creating content.</h3>
            <p>
              I'm a Software Engineer passionate about building scalable systems and creating meaningful content. 
              With experience across cloud platforms (AWS), infrastructure automation, and full-stack development, 
              I enjoy solving complex problems and sharing knowledge through writing and podcasting.
            </p>
            <p>
              When I'm not coding or writing, you'll find me exploring new technologies, listening to podcasts, 
              or enjoying the simple things in life. I'm always open to new opportunities and collaborations.
            </p>
            <div className="about-contact">
              <a href="mailto:sangy.987@gmail.com" className="button">
                <span>Contact Me</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <svg className="about-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="aboutMask" maskType="alpha">
                  <path d="M 100 20 Q 150 40 160 100 Q 150 160 100 180 Q 50 160 40 100 Q 50 40 100 20 Z" fill="white" />
                </mask>
              </defs>
              <g mask="url(#aboutMask)">
                <circle cx="100" cy="100" r="90" fill="#7c3aed" opacity="0.1" />
                <image href="/assets/img/B612_20190416_162429_298-removebg-preview.png" x="10" y="10" width="180" height="180" preserveAspectRatio="xMidYMid slice" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
