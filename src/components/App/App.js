import {Routes, Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <main>
        <div className='main__wrapper'>
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