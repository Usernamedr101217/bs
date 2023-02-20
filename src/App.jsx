import { useState } from 'react'
import './index.css'
import Brawlers from './section/brawlers/brawlers'
import Events from './section/events/events'
import Customize from './section/Customize'
import { Link } from 'react-scroll'

function App() {
  const [showNav, setShowNav] = useState(false)

  const handleClick = () => {
    setShowNav(!showNav)
  }
  const closeNav = () => {
    if (showNav) {
      setShowNav(false);
    }
  };

  return (
    <div className="App">
      <nav>
        <h1 id='head'>Rawstats</h1>
        <img src="/Star.svg" alt="star" className='dropdown' onClick={handleClick}/>
        <div className={showNav ? 'open' : ''}>
            <span style={{ cursor: 'pointer', color: 'gray' }} onClick={closeNav}>X</span>
            <Link className='link' to='events' smooth={true} duration={500} onClick={closeNav}>Events</Link>
            <Link className='link' to='brawlers' smooth={true} duration={500} onClick={closeNav}>Brawlers</Link>
            <Link className='link' to='custom' smooth={true} duration={500} onClick={closeNav}>Customize</Link>
        </div>
        
      </nav>

      <Events />
      <Brawlers />
      <Customize />

      <footer><i>API provided by <a href="https://brawlify.com/">Brawlify.com</a> </i></footer>

      <Link className='bottom' to='head' smooth={true} duration={500}>Back to top</Link>
    </div>
  )
}

export default App
