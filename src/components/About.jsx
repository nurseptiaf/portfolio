import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";

function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>My name is Nur Septia Fajrina, but you can call me Septi. I’m an undergraduate informatic student at UPN Veteran Jawa Timur who likes to learn new thing an has a high interested in many fields, espicially UI Design, Frontend Develop, education, and beauty content. I’m skilled ini UI design for   more than one year.</p>
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss /><FaBootstrap /><FaGit /><FaFigma />
                </div>
            </div>
        </section>
    )
}

export default About