import React, { } from 'react';
import './register-style.scss';
// import { FormControlLabel, Switch, Fab } from '@material-ui/core';
// import Icon from '@material-ui/core/Icon';
// import showCaseImage from '../../assets/img/home-search-bg.jpg';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'






// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

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

  users: [],
  user: {},
  snackbarOpen: false,
  num: 11

  

}
componentDidMount(){
  this.getUsers();
}


//close snack bar
 handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  this.setState({
    snackbarOpen: this.state.snackbarOpen = false
  })
}

//show snack bar
showSnackBar = (message) =>{
  return(
 <Snackbar
 open={this.state.snackbarOpen}
 anchorOrigin={{
  vertical: 'bottom',
  horizontal: 'center',
}}
autoHideDuration={6000}
 open={true}
 onClose={this.handleClose}
 message={message}
/>
);
}

  // Get users
 getUsers = () =>{
    axios.get('http://localhost:3600/api/chat_app/v1/users').then(res => {
    console.log('THe Main users', res);
    this.setState({
      users: res.data.users
    })
    }).catch( err => {
      console.log('Error geting users', err);
    });
  }

// Add users
 addUser = () =>{
  this.state.user = {
    gmail_Id: '12390348545', 
    name: `Saint Zion ${this.state.num}`, 
    email: `saint${this.state.num}@gmail.com`,
    verified_email: 'true',
    given_name: 'Saint',
    family_name: 'Zion',
    picture: 'https://lh3.googleusercontent.com/a-/AOh14Giw52i45aXhJYcYR3P2b28_vd9p00_-bJTxqdt6',
    locale: 'en'
}
axios.post('http://localhost:3600/api/chat_app/v1/user2', this.state.user).then(res => {
  console.log(res);
  this.getUsers();

  this.setState({
    snackbarOpen: this.state.snackbarOpen = true
  });
 
  }).catch( err => {
    console.log('Error posting users', err);
    // ax 
  });
}


handleThemeChange = (event) => {
  this.setState({
    darkTheme: this.state.darkTheme = event.target.checked
  })
};
   
    render(){ 
        return(
       <div>
          
      <Snackbar
        anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'center',
         }}
        open={this.state.snackbarOpen}
        autoHideDuration={6000}
        onClose={this.handleClose}
        message="User added."
        action={
          <React.Fragment>
           
            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <div className={`dashboard  animated fadeInUp  ${this.state.darkTheme ? 'bg-dark text-warning': ''}`}>
     <section className="container">
       <div className="mb-5">
       <h3>Register / Sign</h3>
       <button className="btn  btn-outline-danger rounded-lg">SIGN IN WITH GOOGLE</button>
       <button onClick={this.addUser} className="btn  btn-outline-dark ml-4 rounded-lg">AUTO ADD USER</button>
     
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
      </div>
   
    )
    }
}

export default Register;