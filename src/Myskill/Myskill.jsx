import React from 'react'
import './Myskill.css'

export default function Myskill(){
    return(
        <div className="skill" id="skill">
            
            <div className="floating-icon">⚡</div>
            <div className="floating-icon">🎯</div>
            <div className="floating-icon">🚀</div>
            <div className="floating-icon">💡</div>
            <div className="floating-icon">🔥</div>
            
            <div className="myskill-title">
                <h1>My <span>Skills</span></h1>
            </div>
            <div className="myskill-content">
                <div className="myskill-left">
                   
                </div>
                <div className="myskill-right">
                    <div className="myskill-para">
                        <p>I'm a frontend developer with a strong interest in building clean, modern, and user-friendly websites.
Right now, I'm learning Java, HTML, CSS, and React, and I'm constantly improving step by step.</p>
                        <p>Alongside development, I'm also into ethical hacking and know how to secure and protect your site from potential threats.

This mix of frontend skills and security awareness helps me build not just functional projects, but also safe and reliable digital experiences.</p>
                    </div>
                    
                        <div className="myskill-skills">
                            
                                <div className="about-skill"><p>HTML</p><hr style={{ "--skill-width": "80%" }} /></div>
                                <div className="about-skill"><p>CSS</p><hr style={{ "--skill-width": "70%" }} /></div>
                                <div className="about-skill"><p>JavaScript</p><hr style={{ "--skill-width": "60%" }} /></div>
                                <div className="about-skill"><p>React</p><hr style={{ "--skill-width": "80%" }} /></div>
                            </div>
                          
                        </div>
                    </div>
                </div>
    )
}
