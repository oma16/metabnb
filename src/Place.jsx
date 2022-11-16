import React from 'react'
import { Data1 } from './components/Data';
import CardItems from './components/CardItems';
import setting from './images/setting.svg'


const Place = () => {
     
  const data = Data1;


  return (
    <div className='container'>
      <div className='d-flex flex-column-reverse mt-5 mb-3 flex-lg-row '>
           <div className='d-flex specs mt-1 flex-wrap'>
               <p className='me-4'>Resturant</p>
               <p className='me-4'>Cottage</p>
               <p className='me-4'>Castle</p>
               <p className='me-4'>fantast city</p>
               <p className='me-4'>beach</p>
               <p className='me-4'>Carbins</p>
               <p className='me-4'>Off-grid</p>
               <p className='me-4'>Farm</p>
           </div>
           <div className='d-flex location justify-content-between ms-lg-5'>
              <p className=' specs'>Location</p>
              <img src={setting} alt="setting" />
           </div>
      </div>
      <div className='pb-5'>
            <CardItems Data={data} />
      </div>
    </div>
  )
}

export default Place