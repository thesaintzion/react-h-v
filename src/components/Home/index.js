import React, { } from 'react';
import './home-style.scss';
import { FormControlLabel, Switch, Fab } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import showCaseImage from '../../assets/img/home-search-bg.jpg';






class Home extends React.Component{
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
      <div className={`home   ${this.state.darkTheme ? 'bg-dark text-warning': ''}`}>
     <section  className="section-showcase position-relative">
       <div className="content">
         <div className="container">
         <h1>Home Villas LTD <br/> <span>Real Estate Company</span></h1>
         <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
         </div>
       </div>
     </section>

     <section className="section-featured-properies">
<h1>FEATURED PROPERTIES</h1>
     </section>

     <section className="section-features">
<h1>FEATURES</h1>
     </section>

     <section className="section-services">
<h1>SERVICES</h1>
     </section>

     <section className="section-news">
<h1>NEWS</h1>
     </section>

     <section className="section-testimonials">
<h1>TESTIMONIALs</h1>
     </section>

     <section className="section-partners">
<h1>PARTNER</h1>
     </section>

     <section className="section-partners">
<h1>PARTNERS</h1>
     </section>

      </div>
   
    )
    }
}

export default Home;