import React, { useState } from 'react';
import Container from '../container/Container';
import CardJob from '../components/CardJob/CardJob';
import styled from 'styled-components';
import Greeting from '../components/Greeting/Greeting';
import { connect } from 'react-redux';
import { editOffer, removeOffer } from "../store/actions/actions";

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
      company_name={item.company_name}
      role={item.role} contact={`${item.contact.email}`}
      key={item.id}
      clicked={() => props.onRemoveOffer(item.id)}
      edit={() => props.onEditOffer(item)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveOffer: (payload) => {
      console.log(payload)
      dispatch(removeOffer(payload));
    },
    onEditOffer: (payload) => {
      console.log('[EDIT_ITEM', payload)
      dispatch(editOffer(payload))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(JobsList);