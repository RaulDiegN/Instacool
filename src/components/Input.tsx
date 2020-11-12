import * as React from 'react'

const style = {
  backgroundColor: '#fff',
  border:'1px solid #ddd',
  boderRadius:'4px',
  padding:'10px 15px',
  width:'calc(100% - 30px)',
  marginBotton: '10px',
}

interface IInputProps{
  placeholder?: string
  label: string
}

const spanStyle = {
  fontSize: '10px',
  color:'#777',
  textTransform:'uppercase',
  fontWeight: 900,
} as React.CSSProperties

export default class Card extends React.Component<IInputProps>{
  public render(){
    const { children } = this.props
    const { label } = this.props
    return (
      <div>
        <span style={spanStyle}>{label}</span>
        <input {...this.props}  style={style}/>
      </div>
    )
  }
}