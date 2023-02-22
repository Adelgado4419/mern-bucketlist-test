
import Home from './components/home';
import Intro from './components/intro.jsx';
import Create from './components/create.jsx';
import Edit from './components/edit.jsx';
import Leaderboard from './components/leaderboard.jsx';

import './styles.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
const React = require('react')

function App() {


return(
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} ></Route>
        <Route path='/Home' element={<Home/>} ></Route>
        <Route path='/Create' element={<Create />} ></Route>
        <Route path='/Edit/:id' element={<Edit />} ></Route>
        <Route path='/Leaderboard' element={<Leaderboard />} ></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
