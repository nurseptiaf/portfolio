import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <div className="header-jumbotron" id='portfolio'>
                <img src={profilePicture} />
                <h3>Nur Septia Fajrina</h3>
                <p>Programmer - Content Creator - UI/UX Designer</p>
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/nurseptia.f/'><FaInstagram /></a>
                    <a href=''><FaTiktok /></a>
                    <a href='https://www.linkedin.com/in/nur-septia-fajrina-aaa28a24b/'><CiLinkedin /></a>
                </div>
            </div>
        </header>
    )
}

export default Header