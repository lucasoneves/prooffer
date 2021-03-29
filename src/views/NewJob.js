import React from 'react';
import Container from '../container/Container';
import Greeting from '../components/Greeting/Greeting';
import BaseInput from '../components/BaseInput/BaseInput';
import BaseSelect from '../components/BaseSelect/BaseSelect';
import BaseButton from '../components/BaseButton/BaseButton';
import styled from 'styled-components';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';

const FormWrapper = styled.form`
	input {
		width: 100%;
		display: block;
	}

	.button-submit {
		margin: 10px 0px;
	}
`

const GreetingText = styled.p`
	margin-bottom: 40px;
`

const NewJob = (props, {dispatch}) => {
	return (
		<Container>
			<Greeting>Adicionar processo seletivo</Greeting>
			<GreetingText>Preenchar as informações para cadastrar um novo processo seletivo.</GreetingText>
			<FormWrapper>
				<BaseInput type="text" placeholder="Nome da Empresa" />
				<BaseInput type="text" placeholder="Cargo" />
				<BaseInput type="email" placeholder="Email do responsável da vaga" />
				<BaseSelect label="Status da vaga"></BaseSelect>
				<BaseButton className="button-submit" type="success" click={() => props.onAddOffer()}>Salvar</BaseButton>
			</FormWrapper>
		</Container>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddOffer: () => dispatch({type: actionTypes.ADD_OFFER}),
    onRemoveOffer: (id) => dispatch({type: actionTypes.REMOVE_OFFER, offerId: id})
  }
}

export default connect(null, mapDispatchToProps)(NewJob);