
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';



function App() {
  return (
    <div className='App'>
      <Router>
        <>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
         
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
        </>
        
      </Router>
    </div>

  );
}

export default App;
