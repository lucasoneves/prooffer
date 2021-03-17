import React from 'react';
import styled from 'styled-components';

const GreetingWrapper = styled.h2`
  font-size: 30px;
  margin: 100px 0 50px 0;
`

const Greeting = (props) => {
  return (
    <div>
      <GreetingWrapper>
        { props.children }
      </GreetingWrapper>
    </div>
  )
}

export default Greeting;