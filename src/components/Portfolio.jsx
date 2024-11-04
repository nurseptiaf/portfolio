import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import portfolio3 from '../assets/portfolio3.png'


import '../styles/portfolio.css'

function Portfolio() {
  return (
    <section id='project'>
        <div className='wrapper'>
            <h3>Project</h3>
            <div className='flex'>
                <div className='item'>
                    <a href=""><img src={portfolio1} /></a>
                    <a href=""><img src={portfolio2} /></a>
                    <a href=""><img src={portfolio3} /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio