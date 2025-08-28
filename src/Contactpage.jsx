export default function Contactpage() {
    return (
        <section className="contact" id="contact">
            {/* Floating Icons */}
            <div className="floating-icon">📧</div>
            <div className="floating-icon">📱</div>
            <div className="floating-icon">💬</div>
            <div className="floating-icon">📍</div>
            <div className="floating-icon">📞</div>
            
            <div className="contact-content">
                <h2>Contact <span>Me</span></h2>
                
                <p>You can contact me on the following:</p>
                <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
                    <li>jefferyantony.j.2024.csecs@rajalakshmi.edu.in</li>
                    <li>7305663808</li>
                    <li>through <a href="#"><i className='bx bxl-github'></i></a>,<a href="#"><i className='bx bxl-linkedin'></i></a>,<a href="#"><i className='bx bxl-instagram'></i></a></li>
                </ul>
                
            </div>
        </section>
    );
}
