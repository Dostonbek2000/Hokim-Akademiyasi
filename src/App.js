import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';

//components 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const  App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
