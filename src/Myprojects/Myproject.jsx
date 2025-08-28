import "./Myprojects.css"
import myprojectimage from "../assets/myprojectimage.webp"
import myprojectimage2 from "../assets/myprojectimage2.jpg"

function MyBestWork() {
  const projects = [
    {
      id: 1,
      title: "DYSLEXIA",
      description: "Smart Education tool for dyslexic learners",
      image: myprojectimage,
    },
    {
      id: 2,
      title: "BUSSNIESS MANAGEMENT SYSTEM",
      description: "Worked under the project for startups and medium-sized companies to analyze business data.",
      image: myprojectimage2,
    },
    
   
  ]

  return (
    <section className="my-best-work" id="projects">
      {/* Floating Icons */}
      <div className="floating-icon">💼</div>
      <div className="floating-icon">📊</div>
      <div className="floating-icon">🎯</div>
      <div className="floating-icon">🚀</div>
      <div className="floating-icon">💡</div>
      
      <div className="container">
        <h2 className="section-title">My Best Work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyBestWork