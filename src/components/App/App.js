import {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='app'>
        {isOpen ?
        <nav className='menu'>
          <span class='material-symbols-rounded' id='menu__exit' onClick={() => setIsOpen(!isOpen)}>
            close
          </span>
          <div className='top-nav__buttons menu__buttons'>
            <Link to='/' onClick={() => setIsOpen(!isOpen)}className='menu__button'>Home</Link>
            <Link to='/about' onClick={() => setIsOpen(!isOpen)} className='menu__button'>About</Link>
            <Link to='/portfolio' onClick={() => setIsOpen(!isOpen)} className='menu__button'>Portfolio</Link>
            <Link to='/contact' onClick={() => setIsOpen(!isOpen)} className='menu__button'>Contact</Link>
          </div>
        </nav>
        :
        <>
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
          <main>
            <div className='main-wrapper'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/error' />
              </Routes>
            </div>
          </main>
          <Footer />
        </>
      }
    </div>
  )
}

export default App;