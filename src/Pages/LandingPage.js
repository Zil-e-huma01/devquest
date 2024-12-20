import React from 'react';
import Navbar from '../Components/Navbar/Navbar'; 
import LandingTop from '../Components/Top/LandingTop';
import Divider from '../Components/Divider/Divider';
import LandingBottom from '../Components/LandingBottom/LandingBottom';
import Section1 from '../Components/Section1/Grid';
import Section2 from '../Components/Section2/Banner';
import Section3 from '../Components/Section3/Footer';
import TextBanner from '../Components/ZSection/TextQuote';
import EndBanner from '../Components/ZSection/BannerComponent';
import EndFooter from '../Components/ZSection/Footer';



export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <LandingTop />
      <Divider/>
      <LandingBottom/>
      <Section1 />
      <Section2 />
      <Section3 />
      <TextBanner />
      {/* <EndBanner /> */}
      <EndFooter />
      
      {/* Add other page content here */}
    </div>
  );
}
