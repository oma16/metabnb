import React from 'react'
import Logo from '../images/Group.svg'
import facebook from '../images/facebook.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer py-5'>
        <Container>
        <div  className='d-flex flex-column flex-md-row justify-content-md-between'>
        <div>
            <img src={Logo} alt="logo"  className='mb-5 logo'/>
            <div className='mt-5 mb-5'>
                <img src={facebook} alt="media" className='me-5'/>
                <img src={insta} alt="media"  className='me-5'/>
                <img src={twitter} alt="media" />
            </div>
            
        </div>
        <div>
            <p className='footext1'>Community</p>
            <p className='footext'>NFT</p>
            <p className='footext'>Tokens</p>
            <p className='footext'>Landlords</p>
            <p className='footext'>Discord</p>
            
        </div>
        <div>
            <p className='footext1' >Places</p>
            <p className='footext'>Castle</p>
            <p className='footext'>Farms </p>
            <p className='footext'>Beach</p>
            <p className='footext'>Learn more</p>
        </div>
        <div>
            <p className='footext1'>About us</p>
            <p className='footext'>Road map</p>
            <p className='footext'>Creators </p>
            <p className='footext'>Career</p>
            <p className='footext'>Contact us</p>
        </div>
        </div>
        <div className='footercopy'>&copy; 2022 Metabnb</div>
      </Container>  
    </div>
  )
}

export default Footer