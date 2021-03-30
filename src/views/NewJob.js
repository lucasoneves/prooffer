import React, { useState } from 'react';
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

const NewJob = (props) => {
	let [formOffer, setFormOffer] = useState({
		company: '',
		role: '',
		status: '',
		contact: ''
	})
	const handleCompany = (e) => {
		const val = e.target.value;
		setFormOffer(() => {
			return {
				...formOffer,
				company: val
			}
		})
	}
	const handleRole = (e) => {
		const val = e.target.value;
		setFormOffer(() => {
			return {
				...formOffer,
				role: val
			}
		})
	}
	const handleContact = (e) => {
		const val = e.target.value;
		setFormOffer(() => {
			return {
				...formOffer,
				contact: val
			}
		})
	}
	const handleStatus = (e) => {
		const val = e.target.value;
		setFormOffer(() => {
			return {
				...formOffer,
				status: val
			}
		})
	}
	return (
		<Container>
			<Greeting>Adicionar processo seletivo</Greeting>
			<GreetingText>Preenchar as informações para cadastrar um novo processo seletivo.</GreetingText>
			<FormWrapper>
				<BaseInput type="text" placeholder="Nome da Empresa" field="company" blur={handleCompany} />
				<BaseInput type="text" placeholder="Cargo" field="role" blur={handleRole} />
				<BaseInput type="email" placeholder="Email do responsável da vaga" blur={handleContact} />
				<BaseSelect label="Status da vaga" change={handleStatus}></BaseSelect>
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