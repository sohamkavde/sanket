import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
function Header() {
  return (
    <div className={style.Header}>
      <div className={style.titleImage}>
        <div>
          <img src={'/headerImage.png'}   className={style.HeaderImage}/>
        </div>
      </div>
      <div className={style.HeaderSpace}></div>
      <div className={style.HeaderText}>
        <span>Sunday, 20 August</span>
        <span>1:50 PM</span>
        <span><img src={'./vector.png'} alt="" /></span>
      </div>
    </div>
  )
}

export default Header;

