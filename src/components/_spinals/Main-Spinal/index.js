import React from 'react';
import './main-spinal-style.scss';
import logo from '../../../assets/img/homevillas-logo.png';

const MainSpinal = ()  => {
    return (
        <div className="main-spinal d-flex justify-content-center align-items-center app">
          <div className="row">
            <div className="col  mx-auto">
              <div className="spin-style d-flex justify-content-center align-content-center align-items-center">
            <img  src={logo} alt="logo" />
            </div>
            </div>
          </div>
         
        </div>
    )
}

export default MainSpinal;
