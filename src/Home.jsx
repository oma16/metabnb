import React from 'react';
import { InputGroup, Form, Row, Container, Col, Button } from 'react-bootstrap';
import image4 from './images/Group4.png';
import image5 from './images/Group3.png';
import groupcoy from './images/Groupcoy.svg';
import group from './images/Frame4041.svg';
import group040 from './images/Group040.svg';
import CardItems from './components/CardItems';
import { Data } from './components/Data';




const Home = () => {

    const data = Data;

  return (
    <div>
         <Container>
            <Row className='  py-5 justify-content-center'>
                <Col sm={12} md={12} lg={6} className='hero align-item-center'>
                    <h1 className='head mt-5 mb-3'>Rent a <span>Place</span>  away from <span>Home</span>  in the <span>Metaverse</span> </h1>
                    <div className='headtext mb-4 mt-5'>we provide you access to luxury and affordable houses in the metaverse, get a chance 
                        to turn your imagination to reality at your comfort zone
                    </div>
                    <div className=' mt-5'>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Search for location"
                            aria-label="Search for location"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                        </InputGroup>
                    </div>
                
        
                </Col>
                <Col sm={12} md={12} lg={6} className=' d-flex ms-0 container  justify-content-center'>
                    
                            <div className=' row ms-0 g-1 mt-4 mt-lg-0 ps-lg-5 ps-0'>
                                <img src={image5} alt="metaimg" className='mb-1 img-fluid' />
                                
                            </div>
                    
                </Col>
            </Row>
         </Container>
         <div className='py-3 company'>
            <div className='d-flex flex-column align-items-center flex-md-row justify-content-md-between container'>
                <img src={groupcoy} alt="companyimg" className='companyimg'/>
                <img src={group040} alt="companyimg" className='companyimg'/>
                <img src={group} alt="companyimg" className='companyimg'/>

            </div>
        </div>

        <div className='container p-5'>
            <div>
                <h2 className='next m-3'>Inspiration for your next adventure</h2>
            </div>
            <CardItems  Data={data}/>
        </div>
        <div className='more py-5'>
        <Container>
            <Row className=' my-5 pt-5 justify-content-center'>
                <Col sm={12} md={12} lg={6} className='hero align-item-center mb-4'>
                <div>
                <h3 className='nft'>Metabnb NFTs</h3>
                <div>
                    <p className='discover'>Discover our NFT gift cards collection. Loyal customers gets 
                         gift cards which are traded as NFTs. 
                        These NFTs gives our cutomer access to
                         loads of our exclusive services.
                    </p>
                </div>
                <div>
                <Button  className='learnbtn'>Learn more</Button>
                </div>
            </div>
        
                </Col>
                <Col sm={12} md={12} lg={6} className=' d-flex ms-0 container justify-content-center'>
                   
                    <div className='row ms-0 g-1 mt-4 mt-lg-0'>
                         <img src={image4} alt="discoverimg" className='firstimg  img-fluid'/>
                
                    </div>
                   
                </Col>
            </Row>
         </Container>
        
        <div className='container  d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
         
         
        </div>
        </div>

       
    </div>
  )
}

export default Home