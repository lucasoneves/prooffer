import React, { useState } from 'react';
import Container from '../container/Container';
import CardJob from '../components/CardJob/CardJob';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const Greeting = styled.h2`
font-size: 30px;
margin: 100px 0 50px 0;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 20px;

&:hover {
  .card-offer {
    opacity: .6;
  }
}

.card-offer {
  &:hover {
    opacity: 1;
  }
}
`

const JobsList = (props) => {

  const jobsInfo = props.offer.map(item =>
    (<CardJob classList="card-offer"
      thumb={item.thumb}
      companyName={item.company_name}
      role={item.role} contact={`${item.contact.email}`}
      key={item.id}
    >  
    </CardJob>)
  )

  return (
    <div>
      <Container>
        <Greeting>Olá! Esses são seus processos seletivos cadastrados =).</Greeting>
        <Wrapper>
          {jobsInfo}
        </Wrapper>
      </Container>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    offer: state.offers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddOffer: () => dispatch({type: actionTypes.ADD_OFFER}),
    onRemoveOffer: (id) => dispatch({type: actionTypes.REMOVE_OFFER, offerId: id})
  }
}

export default connect(mapStateToProps)(JobsList);