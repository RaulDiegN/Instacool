import * as React from 'react'

const style = (block: boolean, disabled: boolean) => ({
  backgroundColor: disabled ? "#777777" : "#00D1B2",
  border:'0px',
  borderRadius:'4px',
  color: '#fff',
  marginTop:'10px',
  marginBotton:'10px',
  padding:'10px 15px',
  width: block ? '100%' : undefined
})

interface IButtonProps{
  block?:boolean
  disabled?: boolean
}

export default class Button extends React.Component<IButtonProps>{
  public render(){
    const { block = false, disabled = false, ...otherProps } = this.props;
    return (
      <button
        {...otherProps}
        style={style(block, disabled)}
        disabled={disabled}
      />
    )
  }
}