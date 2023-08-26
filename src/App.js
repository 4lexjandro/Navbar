
import './App.css';
import Contact from './Routes/Contact'
import About from './Routes/About'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    
    <Router>
      <Navbar/>

      <Routes>
    
     <Route path='/about' element={<About />} />

     <Route path='/contact' element={<Contact />} />
    
     </Routes>
     <h1>hello</h1>

    </Router>
    </>
  );
}

export default App;
