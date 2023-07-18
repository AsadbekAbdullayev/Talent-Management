import React from 'react'
import {Wrapper} from './style';

const Button = ({children,color,bg,br,border,width,height,onClick}) => {
 
  return (
    <Wrapper
     color={color} 
     bg={bg} 
     br={br} 
     border={border} 
     width={width}
     height={height}
     onClick={onClick}
     >
      <Wrapper.Title>

      {children || 'text'}
      </Wrapper.Title>
      </Wrapper>
  )
}

export default Button