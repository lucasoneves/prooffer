import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin: 12px 0;
  padding: 10px 10px;
  border-radius: 5px;
  border: 0;
  font-size: 14px;

  &:focus {
    outline: default;
  }
`

const BaseInput = (props) => {
  return (
    <Input type={props.type} placeholder={props.placeholder} onChange={props.change}></Input>
  )
}

export default BaseInput;