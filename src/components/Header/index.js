import React from 'react';
import './header-style.scss';
import  {  NavLink  } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import logo from '../../assets/img/homevillas-logo.png';
// import Icon from '../../shared/MatComponents';

class Header extends React.Component{


    render(){
        
        return(
<React.Fragment>
    <header className="bg-ligh shadow-sm">
    <div  className="upper-header ">
    <div className="container">
        <div className="d-flex justify-content-between  w-100 ">
      <div className="app-brand d-flex  align-items-center">
      <img  src={logo} className="app-logo" alt="logo" />
      </div>
      <div className="app-nav d-flex flex-1  align-items-center align-content-center">
          <div>
              <select className="form-control border-0">
                  <option>USSD($)</option>
                  <option>NAIRA(N)</option>
              </select>
          </div>
          <div className="ml-5">
              <small className="color-light-gray">Call for Enquiry</small>
              <h6 className="mb-0 text-bolder">202-555-0182</h6>
          </div>
          <div className="ml-5">
          <NavLink exact to="/" className="btn btn-outline-danger">CREATE PROPERTY</NavLink>
          </div>
      </div>
      </div> 
      </div>
</div>
    </header>

    <nav className="bg-purple  w-100 ">
    <div className="container">
        <div className="w-100 d-flex justify-content-between">
    <div className="main-nav d-flex flex-1 text-white">
       <NavLink exact to="/" className="h-100 d-flex align-items-center"> HOME  </NavLink>
       
       <NavLink exact to="/" className="h-100 d-flex align-items-center"> ABOUT  </NavLink>
       
       <NavLink exact to="/" className="h-100 d-flex align-items-center"> CONTACT  </NavLink>
       <NavLink exact to="/" className="h-100 d-flex align-items-center"> HOME  </NavLink>
       
       <NavLink exact to="/" className="h-100 d-flex align-items-center"> ABOUT  </NavLink>
     
       <NavLink exact to="/" className="h-100 d-flex align-items-center"> CONTACT  </NavLink>
      </div> 
  

      <div className="text-white d-flex">
          <div className="social d-flex justify-content-center flex-1">
          <NavLink exact to="/" className="h-100 d-flex align-items-center"> <i className="fa fa-facebook"></i>  </NavLink>
          <NavLink exact to="/" className="h-100 d-flex align-items-center"> <i className="fa fa-youtube"></i>  </NavLink>
          <NavLink exact to="/" className="h-100 d-flex align-items-center"> <i className="fa fa-instagram"></i>  </NavLink>      
          <NavLink exact to="/" className="h-100 d-flex align-items-center"> <i className="fa fa-twitter"></i>  </NavLink>      
          
          </div>
          
          <div className="account ml-4">
          <NavLink exact to="/register" className="h-100 d-flex align-items-center"> <i className="fa fa-user"></i> <span className="ml-2">Singnin/Register</span></NavLink>
          </div>
     
      </div>
      </div>
      </div>
</nav>
    </React.Fragment>

        )
    }
}

export default Header;