import React, { useState } from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../images/Group.png';
import ModalMeta from './ModalMeta';


const Navmenu = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='mt-4'>
      <Navbar  expand="lg">
         <Container>
        <Navbar.Brand  className='mr-5 '> <Link to="/"><img src={Logo} alt="logo" className='logo'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navstart navtext mt-2"
            navbarScroll
          >
            <Link to="/" className='me-3 text-decoration-none navtext'>Home</Link> 
            <Link to="/place" className='me-3 text-decoration-none navtext'>Place to stay</Link>
            <Link to="/nfts" className='me-3 text-decoration-none navtext'>NFTs</Link>
            <Link to="/community" className='text-decoration-none navtext'>Community</Link>
           
          </Nav>
        
            <Button  className='navbtn' onClick={handleShow}>Connect wallet</Button>
            <ModalMeta show={show} onHide={handleClose}/>
      
        </Navbar.Collapse>
        </Container>
    </Navbar>
    <Outlet />
    </div>
  )
}

export default Navmenu