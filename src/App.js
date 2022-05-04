import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';

//components 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import HomeScreen from './Screens/HomeScreen';

const  App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<HomeScreen />}/>
      </Routes>
    </Router>
  );
}

export default App;
