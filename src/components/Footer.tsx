import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons' 

const styleFooter = {
  backgroundColor: '#eee',
  display: 'flex',
  marginLeft: '-15px',
  marginBottom:'-10px',
  width: 'calc(100% + 30px)'
}

const styleButton = {
  cursor: 'pointer',
  flex: 1,
  padding: '10px, 15px',
  textAlign: 'center',
} as React.CSSProperties

interface IFooterProps{
  like: () => void
  share: () => void
}

export default class Footer extends React.Component<IFooterProps>{
  public render() {
    const { like, share } = this.props
    return (
      <div style={styleFooter}>
        <div onClick={like} style={styleButton}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div onClick={like} style={styleButton}>
          <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    )
  }
}