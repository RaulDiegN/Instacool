import React, {Component} from 'react';
import './App.css';

import Login from './Containers/Auth/Login'
import Register from './Containers/Auth/Register'

import { Route } from 'react-router'

class App extends Component {
  public render(){
    return (
     <div>
       <Route exact={true}  path='/' component={Login}/>
       <Route exact={true}  path='/register' component={Register}/>
     </div>
    );
  }
}

export default App;
