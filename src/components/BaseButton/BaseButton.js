import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  font-size: 12px;
  width: auto;
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
`

const BaseButton = (props) => {
  return (
    <ButtonWrapper className={props.type}>
      { props.children }
    </ButtonWrapper>
  )
}

export default BaseButton;