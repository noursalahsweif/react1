import React, { Component } from 'react'
import style from './contact.module.css'

export default class Contact extends Component {
  render() {
    return <>
    <div className={style.design + " text-center"}>

    <div className="container">
                <div>
                <h2 className='fs-1 fw-bold mb-3'>CONTACT SECTION</h2>
                <div className={style.add +' m-auto' }></div>
                <div className="row mt-4 g-3">
                    <div className={ style.design2 +" col-12 d-flex mt-5"}>
                        <input type="text" placeholder='username' className={style.input + ' form-control p-2 w-50'} />
                    </div>
                    <div className={ style.design2 +" col-12 d-flex mt-5"}>
                        <input type="text" placeholder='userage' className={style.input +' form-control p-2 w-50'} />
                    </div>
                    <div className={ style.design2 +" col-12 d-flex mt-5"}>
                        <input type="text" placeholder='userEmail' className={style.input +' form-control p-2 w-50'} />
                    </div>
                    <div className={ style.design2 +" col-12 d-flex mt-5"}>
                        <input type="password" placeholder='userPassword' className={style.input + ' form-control p-2 w-50'} />
                    </div>
                    
                </div>
                <button className='btn btn-danger mt-3'>submit</button>
                </div>
            </div>
    </div>
        
    
    </>
  }
}
