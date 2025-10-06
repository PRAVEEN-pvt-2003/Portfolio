import Skills from "./skills";

function About(){
    return(
        <div className="about" id="About">
        <h1 className="title" >About me</h1>
        <p>Hi, I'm Praveen Kumar — a passionate Frontend Developer with a knack for crafting clean, responsive, and user-focused web interfaces. I love turning complex problems into simple, elegant designs using modern tools like React, JavaScript, and CSS. I'm always eager to learn, grow, and collaborate with teams that build amazing digital experiences.</p>
        <h3>To Know About Myself</h3>
        <a href="#Skills" className="btn-scroll">Click to see skills</a>

        <h2> 
            <a href="/PRAVEEN KUMAR S RESUME.pdf" 
            download 
            className="resume-btn"
            onClick={()=> alert("Resume download started!📄")}>
                Download Resume &#8594;
            </a>
        </h2>
        </div>
    );
}

export default About