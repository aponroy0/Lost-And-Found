// App.jsx
import Header from './UserDashboard/Header.Jsx';
import Footer from './UserDashboard/Footer.jsx';
import Maincontainer from './UserDashboard/Maincontainer.jsx';
import PostReport from './UserDashboard/PostReport.jsx';
import { Outlet } from 'react-router-dom';

import { useState } from 'react';


function App() {
    
  
  
  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: 'oklch(27.8% 0.033 256.848)' }}
    >
     
      <div className="relative z-[1000]">
        <Header/>
      </div>
      <Outlet/>
      <Footer/>
    </div>

    
  );
}

export default App;
