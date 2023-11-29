import {Routes, Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const App = () => {

  // import hamburger icon
  // set state in App that will determine if hamburger is visible or if full nav is visible (isHamburger?)
  // CTA should be visible at all times
  // when screen shrinks below certain size (1000px?) flip isHamburger to true
  // conditionally render nav or hamburger in App based on isHamburger
  // when hamburger is clicked, flip state (isOpen?)
  // when menu is open, overlay nav should be visible, hamburger icon should be invisible, exit button should be visible
  // create component for hamburger Nav
  // rename topNav

  return (
    <div className='app'>
      <Nav />
      <main>
        <div className='main-wrapper'>
          <Routes>
            <Route 
              path='/' 
              element={<Home />}
            />
            <Route 
              path='/about'
              element={<About />}
            />
            <Route 
              path='/contact'
              element={<Contact />}
            />
            <Route 
              path='/portfolio'
              element={<Portfolio />}
            />
            <Route 
              path='/error'
            />
          </Routes>
        </div>
       </main>
      <Footer />
    </div>
  )
}

export default App;