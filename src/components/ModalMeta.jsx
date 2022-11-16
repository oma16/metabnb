import React from 'react';
import { Modal } from 'react-bootstrap';
import image66 from '../images/image66.png'; 
import image69 from '../images/image69.png'; 
import vector from '../images/Vector.svg'; 


const ModalMeta = ({ show, onHide}) => {
   

  return (
    <>

      <Modal show={show} onHide={onHide} className='mt-5 pt-5'>
              <Modal.Header closeButton>
                <Modal.Title className='connect'>Connect Wallet</Modal.Title>
              </Modal.Header>
              <Modal.Body className='mb-3'>
                <p>Choose your preferred wallet:</p>
                <div className='metamask'>
                  <div className='d-flex container justify-content-between'>
                    <div className='d-flex '>
                      <img src={image66} alt="Metamask" />
                      <p className='metawall mt-3 ms-3'>Metamask</p>
                    </div>
                    <img src={vector} alt="arrow" />
                  </div>
                </div>

                <div className='metamask mt-4'>
                  <div className='d-flex container justify-content-between'>
                    <div className='d-flex '>
                      <img src={image69} alt="WalletConnect" />
                      <p className='metawall mt-3 ms-3'>WalletConnect</p>
                    </div>
                    <img src={vector} alt="arrow" className=''/>
                  </div>
                </div>
              </Modal.Body>
              
      </Modal>

    </>
  )
}

export default ModalMeta