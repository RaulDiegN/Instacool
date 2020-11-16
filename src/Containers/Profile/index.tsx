import * as React from 'react'
import Button from '../../components/Button'

import ProfileImg from '../../components/ProfileImg'
import Card from '../../components/Card'
 
const style = {
  container:{
    padding:'15px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  }
}


export default class Profile extends React.Component{
  public render(){
    return (
      <div style={style.container}>
        <div style={style.row}>
          <ProfileImg />
          <Button> Agregar </Button>
        </div>
        <div style={style.row}>
          <Card><img src='http://placekitten.com/250/250' /></Card>
          <Card><img src='http://placekitten.com/250/250' /></Card>
          <Card><img src='http://placekitten.com/250/250' /></Card>
        </div>
        <div style={style.row}>
          <Card><img src='http://placekitten.com/250/250' /></Card>
          <Card><img src='http://placekitten.com/250/250' /></Card>
          <Card><img src='http://placekitten.com/250/250' /></Card>
        </div>
      </div>
    )
  }
}