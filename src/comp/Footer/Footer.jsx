import React, { Component } from 'react'
import style from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return <>
    <div className={style.foter + " "}>
        <div className="container">
            <div className="row">
                <div className="col-4 text-center text-white">
                    <h2>
                    LOCATION
                    </h2>
                    <p>2215 John Daniel Drive</p>
                    <h4>Clark, MO 65243</h4>
                </div>
                <div className="col-4 text-center text-white">
                    <h2>ABOUT THE WEB</h2>
                    <span className={style.span}><i className={style.icon + " fa-brands fa-facebook"}></i></span>
                    <span className={style.span}><i className={style.icon + " fa-brands fa-twitter"}></i></span>
                    <span className={style.span}><i className={style.icon + " fa-brands fa-linkedin"}></i></span>
                    <span className={style.span}><i className={style.icon + " fa-solid fa-globe"}></i></span>
                    
                </div>
                <div className="col-4 text-center text-white">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
           
        </div>
        
    </div>
    </>
  }
}
