import React, { } from 'react';
import './register-style.scss';
import { FormControlLabel, Switch, Fab } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import showCaseImage from '../../assets/img/home-search-bg.jpg'





class Register extends React.Component{
state = {
  apps : [
    {
      route: '/blog',
      name: 'Blog',
      icon: 'list'
    },
    {
      route: '/snake-game',
      name: 'Snake Game',
      icon: 'videogame_asset'
    }
  ],
  darkTheme: false,

}

handleThemeChange = (event) => {
  this.setState({
    darkTheme: this.state.darkTheme = event.target.checked
  })
};
   
    render(){ 
        return(
  
      <div className={`dashboard   ${this.state.darkTheme ? 'bg-dark text-warning': ''}`}>
     <section>
       <h3>Dashboard</h3>
       <button className="btn  btn-primary rounded-lg">SIGN IN</button>
     </section>
      </div>
   
    )
    }
}

export default Register;