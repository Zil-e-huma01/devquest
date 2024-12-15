import React from 'react';
import Navbar from '../Components/Navbar/Navbar'; 
import LandingTop from '../Components/Top/LandingTop';
import Divider from '../Components/Divider/Divider';
import LandingBottom from '../Components/LandingBottom/LandingBottom';


export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <LandingTop />
      <Divider/>
      <LandingBottom/>
      
      {/* Add other page content here */}
    </div>
  );
}
