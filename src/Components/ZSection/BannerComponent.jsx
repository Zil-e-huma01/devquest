import React from 'react'
import './BannerComponent.css'

export default function BannerComponent() {
  return (
    <div className='bannerComp'>
        <div className='BannerCFrame'>

            <div>
            <h1>Ready to create your <br /> community experience?</h1>
            <p style={{fontSize:'0.5rem'}}>Try Base free. No credit card required</p>
            </div>

            <div>
                <button>Create your base</button>
            </div>
        </div>
    </div>
  )
}
