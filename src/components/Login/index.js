import React, { } from 'react';
import './login-style.scss';
// import { FormControlLabel, Switch, Fab } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
// import showCaseImage from '../../assets/img/home-search-bg.jpg';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';





// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

class Login extends React.Component{
  
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
       <div className="login">
      <div className={`animated fadeInUp  ${this.state.darkTheme ? 'bg-dark text-warning': ''}`}>
     <section className="container">
       <div>
       <h3>Sign In</h3>
       <p>Login with your social accounts.</p>
       </div>
       <div>
       <Button
       className="bg-primary text-white mb-3"
        variant="contained"
        color="default"
        startIcon={<Icon>person</Icon>} >
        Facebook
      </Button>
      </div>
<div>
      <Button
       className="bg-danger mb-3 text-white"
        variant="contained"
        color="default"
        startIcon={<Icon>person</Icon>} >
        Google
      </Button>
      </div>
      <div>

      <Button
       className="bg-dark mb-3 text-white"
        variant="contained"
        color="default"
        startIcon={<Icon>person</Icon>} >
        Github
      </Button>
      </div>
     </section>
      </div>
      </div>
   
    )
    }
}

export default Login;