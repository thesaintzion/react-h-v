import React, { } from 'react';
import './register-style.scss';
import { FormControlLabel, Switch, Fab } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import showCaseImage from '../../assets/img/home-search-bg.jpg';
import axios from 'axios';





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

  users: []

}
componentDidMount(){
axios.get('http://localhost:5000').then(res => {
console.log('THe Main users', res);
this.setState({
  users: res.data.users
})
}).catch( err => {
  console.log(err);
})
}



handleThemeChange = (event) => {
  this.setState({
    darkTheme: this.state.darkTheme = event.target.checked
  })
};
   
    render(){ 
        return(
  
      <div className={`dashboard  animated fadeInUp  ${this.state.darkTheme ? 'bg-dark text-warning': ''}`}>
     <section className="container">
       <div className="mb-5">
       <h3>Register / Sign</h3>
       <button className="btn  btn-outline-danger rounded-lg">SIGN IN WITH GOOGLE</button>
       </div>
       <div className="row">
        
         {
         this.state.users.map(user => {
           return(
            <div key={user._id} className="col-md-4">
             <div className="card mb-4">
               <div className="card-body">
           <h3>{user.name}</h3>
           <p>{user.email}</p>
           <p>{user.gmail_Id}</p>
           <img width="40" className="rounded-circle shadow" src={user.picture}></img>
         

               </div>
             </div>
             </div>
           )
         })
       }
      
       </div>
  
     </section>
      </div>
   
    )
    }
}

export default Register;