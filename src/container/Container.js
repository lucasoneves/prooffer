import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 0 15px;
`

const container = (props) => {
  return (
    <ContainerWrapper>
      {props.children}
    </ContainerWrapper>
  )
}

export default container;