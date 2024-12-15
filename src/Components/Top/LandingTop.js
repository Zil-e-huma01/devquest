import React from 'react'
// import dash from '../../../public/assets/images/dash.png'
import './LandingTop.css';

export default function LandingTop() {
  return (
    <div className='top-container'>
      <div className='banner'>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <h1>Give your <br /><span>customers</span> a voice <br />with Community</h1>
        <p>Creators and brands use base to create thriving communities,<br /> amplifying engagement and cultures.</p>
    <button>Create your base</button>
    <p>Try base free. No credit card required</p>
    <div className='dashboard'>
      <img src="/assets/images/dash.png" alt="Dash" style={{width:'50vw'}}/>
      </div>
      </div>

    </div>
  )
}
