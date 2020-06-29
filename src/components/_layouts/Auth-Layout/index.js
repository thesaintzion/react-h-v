import React, { Component } from 'react';
import Footer from '../../Footer';
import  {  NavLink  } from 'react-router-dom';
import logo from '../../../assets/img/homevillas-logo.png';
import './auth-layout-style.scss';

export default ({children}) => (
    
<React.Fragment>
<div class="auth">
    <header>
    <div className="container">
        <div className="app-brand d-flex  align-items-center w-100">
        <img  src={logo} className="app-logo mx-auto" alt="logo" />
        </div>
    </div> 
    </header>
    {children}
    <Footer />
</div>
</React.Fragment>
    
)

