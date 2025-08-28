
import Hero from "./Hero.jsx"
import "boxicons/css/boxicons.min.css";

 

export default function Homepage(){
    return(
        <section className="home" id="home">
           
           <div className="floating-icon">🚀</div>
           <div className="floating-icon">💻</div>
           <div className="floating-icon">⚡</div>
           <div className="floating-icon">🎯</div>
           <div className="floating-icon">🔥</div>
           
           <div className="home-content">
            <h3>Hi,It's me</h3>
            <h1>Jeffery Antony</h1>
            <h3>And I'm a <span><Hero /></span> </h3>
            <p>I've built real projects under pressure, which taught me to think fast, solve problems effectively, adapt quickly, and work well in a team.</p>
           <div className="home-sci">
            <a href="https://www.instagram.com/jeffery_antony/"><i className='bx bxl-instagram'></i></a>
            <a href="https://github.com"><i className='bx bxl-github'></i> </a>
            <a href="https://www.linkedin.com/in/jeffery-antony-b28208351/"><i className='bx bxl-linkedin'></i> </a>
             </div>
            <a href="#" className="btn-box">More About me</a>
           </div>
        </section>
    )
}