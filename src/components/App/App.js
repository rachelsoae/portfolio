import {Routes, Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route 
            path='/' 
            element={<Home />}
          />
          <Route 
            path='/about'
          />

        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;