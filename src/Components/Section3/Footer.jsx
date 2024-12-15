import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='containerFooter'>
        <div className='Footer'>
            <h1>iOS. Android. Web. <br />
            It just works
            </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            <ul>
            <li><button><img src="/assets/images/google.png" alt="" /></button></li>
                <li><button><img src="/assets/images/app.png" alt="" /></button></li>
            </ul>
            <div className='imgcontainer'>
            <img src="/assets/images/DevQuest.png" alt="" />
            </div>
        </div>
    </div>
  )
}
