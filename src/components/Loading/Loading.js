import React from 'react';
import styled from 'styled-components';

const WrapperLoading = styled.div`
  background: rgba(0,0,0,.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = () => (
  <WrapperLoading>
    ...loading
  </WrapperLoading>
)

export default Loading;