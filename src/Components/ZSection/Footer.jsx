import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='FooterContainer'>
          {/* <div className='bannerComp'> */}
        <div className='BannerCFrame'>

            <div>
            <h1>Ready to create your <br /> community experience?</h1>
            <p style={{fontSize:'0.5rem'}}>Try Base free. No credit card required</p>
            </div>

            <div>
                <button>Create your base</button>
            </div>
        </div>
    {/* </div> */}
      <div className='Foot'>
        <ul>
          <li><h1>Base</h1>
          <p>Creators and brands use Base to create thriving communitites, amplifying engagement and culture.</p>
          </li>
        </ul>
        <ul>
          <li><h3>Solutions</h3></li>
          <li><a href="">Agencies</a></li>
          <li><a href="">Brands & Startups</a></li>
          <li><a href="">Memberships & Coaches</a></li>
          <li><a href="">Clubs & Organisations</a></li>
          <li><a href="">Employee Communication</a></li>
          <li><a href="">Customer Communities</a></li>
        </ul>
        <ul>
          <li><h3>Resources</h3></li>
          <li><a href="">Agencies</a></li>
          <li><a href="">Blogs</a></li>
          <li><a href="">Partners</a></li>
          <li><a href="">Product Roadmap</a></li>
          <li><a href="">Developers</a></li>
          <li><a href="">System Status</a></li>
        </ul>
        <ul>
          <li><h3>Company</h3></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Terms of Service</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>


      </div>
      <hr color='white' width='90%'/>
      <div className='Ending'>
        <aside>2024 Base. All rights reserved.</aside>
        <aside style={{gap:'1rem'}}>
          <button><i class="fa-brands fa-facebook"></i></button>
          <button><i class="fa-brands fa-whatsapp"></i></button>
          <button><i class="fa-brands fa-linkedin"></i></button>
          <button><i class="fa-brands fa-discord"></i></button>
        </aside>

      </div>
    </div>
  )
}
