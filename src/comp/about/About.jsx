import React, { Component } from 'react'
import style from './about.module.css'

export default class About extends Component {
  render() {
    return <>
    <div className={style.aboutstyle}>
        <div className="container ">
            <div className="d-flex">
                <div className='text-center'>
                    <h2 className='text-white fs-1 fw-bold mb-4'>
                    ABOUT COMPONENT
                    </h2>
                    <div className={style.layer+ ' m-auto' }></div>
                    <div className="row mt-5">
                        <div className="col-md-6 text-white">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-6 text-white">
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  }
}
