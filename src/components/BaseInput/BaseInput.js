import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin: 12px 0;
  padding: 10px 10px;
  border-radius: 5px;
  border: 0;
  font-size: 14px;
  background: rgba(0, 0, 0, .4);
  color: #f2f2f2;

  &:focus {
    outline: default;
  }
`

const BaseInput = (props) => {
  return (
    <Input type={props.type} placeholder={props.placeholder} 
   onBlur={props.blur} onChange={props.change} name={props.field}></Input>
  )
}

export default BaseInput;