import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  font-size: 12px;
  width: 100%;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #555;
  cursor: pointer;
  background-color: ${props => props.type || 'transparent'};

  &.danger {
    border: 1px solid transparent;
    color: #d63031;
  }

  &.success {
    background: #2980b9;
    color: #fff;
  }
`

const BaseButton = (props) => {
  return (
    <ButtonWrapper className={[props.type, props.className]} onClick={props.click}>
      { props.children }
    </ButtonWrapper>
  )
}

export default BaseButton;