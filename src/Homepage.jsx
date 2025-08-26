
import Hero from "./Hero.jsx"
import "boxicons/css/boxicons.min.css";

 

export default function Homepage(){
    return(
        <section className="home" id="home">
           <div className="home-content">
            <h3>Hi,It's me</h3>
            <h1>Jeffery Antony</h1>
            <h3>And I'm a <span><Hero /></span> </h3>
            <p>I've built real projects under pressure, which taught me to think fast, solve problems effectively, adapt quickly, and work well in a team.</p>
           <div className="home-sci">
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-whatsapp'></i> </a>
            <a href="#"><i className='bx bxl-instagram'></i> </a>
             </div>
            <a href="#" className="btn-box">More About me</a>
           </div>
        </section>
    )
}