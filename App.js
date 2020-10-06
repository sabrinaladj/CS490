import React from 'react';
import './App.css';
import './Header';
import Announcements from './Announcements'

import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      

    {/*Header*/ }
    <Header></Header>


        <div className = "app_main">
        
        {/*Sidebar*/ }
        <Sidebar></Sidebar>
          
        {/*Announcements*/ }
        <Announcements></Announcements>
        </div>

    </div>
  );
}

export default App;
