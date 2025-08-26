
import "boxicons/css/boxicons.min.css";
export default function Myskill(){
    return(
        <>
        <h1 className="heading">My <span>Skills</span></h1>
        <section>
            <div className="container1" id="Skills">
            <h1 className="heading1">Techincal Skills</h1>

                <div className="Technical-bars">
                    <div className="bar"><i className='bx bxl-html5' style={{ color: "#d0ce17", fontSize: "24px" }}></i>
                        <div className="info">
                            <span>HTML</span>
                            </div>
                   <div className="progress-line html">
                    <span></span>
                   </div>
                </div>
                <div className="bar"><i className='bx bxl-css3' style={{ color: "#0000FF", fontSize: "24px" }}></i>

                        <div className="info">
                            <span>CSS</span>
                            </div>
                   <div className="progress-line css">
                    <span></span>
                   </div>
                </div>
                <div className="bar"><i className='bx bxl-java' style={{ color: "#d0ce17", fontSize: "24px" }}></i>
 
                    <div className="info">
                        <span>Java</span>
                    </div>
                    <div className="progress-line java">
                        <span></span>
                    </div>
                </div>
                <div className="bar"><i className='bx bxl-react' style={{ color: "#00FFFF", fontSize: "24px" }}></i>
                    <div className="info">
                        <span>React</span>
                    </div>
                    <div className="progress-line react">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </section>  

   </>      
    );
    
}