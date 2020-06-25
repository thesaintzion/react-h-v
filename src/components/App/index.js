import React, { Suspense, lazy } from 'react';
import './app-style.css';
import {   Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';
import MainSpinal from '../_spinals/Main-Spinal';


// Components
import AppRoute from '../_routes/App-Router';
import Register from '../Register';
const Home = lazy(() =>  import('../Home'));
// const AppRoute = lazy(() =>  import('../_routes/App-Router'));
const MainLayout = lazy(() =>  import('../_layouts/Main-Layout'));



class  App  extends React.Component{
state = {
  users: [],
}

// Api url
url = 'http://localhost:3600/api/no-whatsapp/v1';
componentDidMount(){
// Get users
// axios.get(`${this.url}/users`).then(res => {
//   console.log('data', res.data,);
// this.setState({
//   users: res.data.users
// });
// }).catch( err => {
//   console.error('Error getting users', err);
// })

}

  render(){ 
    return ( 
<Router>
    <div className = "app" >
    <Suspense fallback={
    <MainSpinal />
    }>
      <Switch>
        {/* main layout */}
        <AppRoute exact path='/'  component={Home}  layout={MainLayout}/>
        <AppRoute  path='/register'  component={Register}  layout={MainLayout}/>

      </Switch>
      </Suspense>
  </div>
</Router>
    );
}
}


export default App;