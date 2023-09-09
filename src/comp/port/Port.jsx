import React, { Component } from 'react'
import style from './port.module.css'
import photo1 from '../image/poert1.png'
import photo2 from '../image/port2.png'
import photo3 from '../image/port3.png'

export default class Port extends Component {
  render() {
    return <>
    
    <div className={style.prot}>
        <div className={ style.alldata + " container text-center"}>
        <div>
        <h2 className=' text-center fs-1 fw-bold mb-4'>PORTFOLIO COMPONENT</h2>
        <div className={style.shape +' m-auto' }></div>
        <div className="row g-4 mt-4">
            <div className="col-md-4">
                <img src={photo1} alt="" className='w-100' />
            </div>
            <div className="col-md-4">
                <img src={photo2} alt="" className='w-100' />
            </div>
            <div className="col-md-4">
                <img src={photo3} alt="" className='w-100' />
            </div>
            <div className="col-md-4">
                <img src={photo1} alt="" className='w-100' />
            </div>
            <div className="col-md-4">
                <img src={photo2} alt="" className='w-100' />
            </div>
            <div className="col-md-4">
                <img src={photo3} alt="" className='w-100' />
            </div>
        </div>
        </div>
        </div>
    </div>
    
    </>
  }
}
