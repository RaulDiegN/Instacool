import * as React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhotoVideo } from '@fortawesome/free-solid-svg-icons' 

const style = {
  Link:{
    color:'#555', 
    textDecoration:'none',
  },
  navbar:{
    backgroundColor: '#fff',
    borderBottom:'1px solid #aaa',
    padding:'10px 15px',
  },
} 

export default class Card extends React.Component{
  public render(){
    const { children } = this.props
    return (
      <div style={style.navbar}>
        <Link  style={style.Link} to='/app/newsfeed'>
        <FontAwesomeIcon icon={faPhotoVideo} />
          Instacool
        </Link>
        <div style={{float:'right'}}>
          <Link style={style.Link} to='/app/profile'>
            <FontAwesomeIcon icon={faUser} />
            Perfil
          </Link>
        </div>
      </div>
    )
  }
}