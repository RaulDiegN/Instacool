import * as React from 'react'
import { WrappedFieldProps } from 'redux-form' 

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

const Input: React.StatelessComponent<WrappedFieldProps & IInputProps> = props => {
  const { label } = props
    return (
      <div>
        <span style={spanStyle}>{label}</span>
        <input {...props}  style={style}/>
      </div>
    )
}

export default Input