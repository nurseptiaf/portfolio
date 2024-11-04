import '../styles/Navbar.css'
function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href="">Nur Septia</a>
            </div>
            <div className="menu">
            <ul>
                    <li><a href="#portfolio">Portofolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar