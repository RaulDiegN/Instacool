import * as React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../components/Cards'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Center from '../../components/Center'

export default class Login extends React.Component{
  public render(){
    return(
      <Container>
      <Card>
        <Title>Iniciar Sesión</Title>
        <Input placeholder='Correo' label='Correo'/>
        <Input placeholder='Contraseña' label='Contrseña'/>
        <Button block={true}>Enviar</Button>
        <Center>
          <Link to='/register'>Ir al registro</Link>
        </Center>
      </Card>
    </Container>
    )
  }
}