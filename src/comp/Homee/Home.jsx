import React, { Component } from 'react'
import avataaars from "../image/avataaars.svg";
import style from "./home.module.css"

export default class Home extends Component {
  render() {
    return <>
    <div className={style.lay}>
    <div className='text-white'>
    <img className='w-100' src={avataaars} alt="" />
    <h2 className='my-4'>START FRAMEWORK</h2>
    <div className={style.shape}></div>
    <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
    </>
  }
}
