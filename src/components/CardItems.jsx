import React from 'react';
import star from '../images/Star.png';
import {  Row, Col, Card } from 'react-bootstrap';


const CardItems = ({ Data }) => {
    
  
  return (
    <div>
        <Row xs={1} md={2} lg={4} className="g-3">
            {Data.map(dataitem => (
                <Col key={dataitem.id} className='cardimg'>
                      <Card  className='p-2 '>
                      <Card.Img variant="top" src={dataitem.image} className=''/>
                      <Card.Body>
                        
                        <Card.Text>
                      <div className='d-flex  justify-content-between '>
                              <div className='cardtext'>Desert king</div>
                              <div className='cardtext2'>1MBT per night</div>
                          </div>
                          <div className='d-flex  justify-content-between mt-3'>
                              <div className='cardtext'>2345km away</div>
                              <div className='cardtext'>available for 2weeks stay</div>
                          </div>
                          <div>
                              <img src={star} alt="star" className='me-2'/>
                              <img src={star} alt="star" className='me-2'/>
                              <img src={star} alt="star" className='me-2'/>
                              <img src={star} alt="star" className='me-2'/>
                              <img src={star} alt="star" />
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                 </Col>
            ))}
        
          </Row>
    </div>
  )
}

export default CardItems