import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/sidebar/Sidebar';
import React from 'react';
function App() {
  return (
    <div className="App">
       <div className='AppGlass'>
         <Sidebar />
         <MainDash />
         <RightSide />
         <div></div>
       </div>
    </div>
  );
}

export default App;
