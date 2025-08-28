import aboutimage from "./assets/aboutimage.jpg";
export default function Aboutpage(){
      return(  
        <section className="about" id="about">
          {/* Floating Icons */}
          <div className="floating-icon">👨‍💻</div>
          <div className="floating-icon">🎨</div>
          <div className="floating-icon">🔧</div>
          <div className="floating-icon">📚</div>
          <div className="floating-icon">🌟</div>
          
          <div className="about-img">
          <img className="aboutimage"src={aboutimage} alt="blueimage"/>
          </div>
          <div className="about-txt">
            <h2>About <span>Me</span></h2>
            <h4>React Developer!</h4>
            <p>
                Hi, I'm Jeffrey Antony J, a tech enthusiast from Chennai with a knack for turning ideas into real projects. Over time, I've built a strong foundation in web development, Python programming, Java OOP, and AI, with hands-on experience in creating tools like Smart Education for dyslexic learners. I thrive under pressure, having participated in hackathons and Capture the Flag (CTF) events, where I sharpened my problem-solving and coding skills. My passion lies in exploring emerging technologies, building practical solutions, and continuously leveling up my skills—from designing intuitive front-end experiences to developing robust back-end systems.

As a front-end developer with an eye for security, I not only craft interactive and responsive interfaces but also ensure they are resilient against vulnerabilities. I enjoy bridging the gap between creative design and secure, efficient implementation, making sure every project I work on is both visually engaging and technically sound. I am constantly experimenting with modern frameworks, optimizing performance, and exploring innovative approaches to deliver seamless and secure user experiences.
            </p>
            <p>
                My journey in technology began with a curiosity about how things work on the internet. This curiosity led me to explore various programming languages and frameworks, from the basics of HTML and CSS to more complex technologies like React and Node.js. I believe in continuous learning and staying updated with the latest trends in the tech industry.
            </p>
            <p>
                When I'm not coding, you can find me participating in coding competitions, contributing to open-source projects, or mentoring other developers. I believe in the power of community and knowledge sharing, which is why I actively participate in developer meetups and online forums.
            </p>
          </div>
         
        </section>
       )
}