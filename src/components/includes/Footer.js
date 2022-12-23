import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="section footer bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6 className='text-white'>Company Information</h6>
                    <hr className='line'/>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi inventore ut maxime sunt neque dolor adipisci deserunt quibusdam maiores quas quam excepturi, aperiam officiis consequuntur iure minus quasi incidunt ad?</p>
                </div>
                <div className="col-md-4">
                    <h6 className='text-white'>Quick Links</h6>
                    <hr className='line'/>
                    <div><Link >Home</Link></div>
                    <div><Link >About</Link></div>
                    <div><Link >Contact</Link></div>
                    <div><Link >Services</Link></div>
                </div>
                <div className="col-md-4">
                    <h6 className='text-white'>Company Information</h6>
                    <hr className='line'/>
                   <div><p className='text-white'>03161063604</p></div>
                   <div><p className='text-white'>sameersattar1111@gmail.com</p></div>
                   <div><p className='text-white'>karachi</p></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
