import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router'

import { History } from 'history'
import NavBar from './components/NavBar'
import Login from './Containers/Auth/Login'
import Register from './Containers/Auth/Register'
import NewsFeed from './Containers/NewsFeed'
import Profile from './Containers/Profile'
import services from './services'

interface IAppProps{
  history: History
}

class App extends Component<IAppProps> {
  public state = {
    loading: true,
  }
  public componentDidMount(){
    const { auth }  = services
    auth.onAuthStateChanged(user => {
      if(user){
        if(['/','/register'].indexOf(window.location.pathname) > -1){
          const { history } = this.props
          history.push('/app/newsfeed')
        }
      }
      else{
        if(/\app\/./.test(window.location.pathname)){
          const { history } = this.props
          history.push('/')
        }
      }
      this.setState({
        loading:false,
      })
    })
  }

  public render(){
    const { loading } = this.state
    return (
     loading? ' Loading' : <div>
       <Route exact={true}  path='/' component={Login}/>
       <Route exact={true}  path='/register' component={Register}/>
       <Route path='/app' component={NavBar}/>
       <Route exact={true}  path='/app/newsfeed' component={NewsFeed}/>
       <Route exact={true}  path='/app/profile' component={Profile}/>
     </div>
    );
  }
}

export default App;
