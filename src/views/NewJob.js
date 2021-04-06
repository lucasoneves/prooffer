import React, { useState } from 'react';
import Container from '../container/Container';
import Greeting from '../components/Greeting/Greeting';
import BaseInput from '../components/BaseInput/BaseInput';
import BaseSelect from '../components/BaseSelect/BaseSelect';
import BaseButton from '../components/BaseButton/BaseButton';
import Loading from '../components/Loading/Loading';
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
	const [loading, setLoading] = useState(false)
	let [formOffer, setFormOffer] = useState({
		company_name: '',
		role: '',
		status: '',
		thumb: '',
		contact: '',
		id: Math.floor(Math.random() * 9999999999) + 1
	})
	const handleCompany = (e) => {
		const val = e.target.value;
		setFormOffer(() => {
			return {
				...formOffer,
				company_name: val
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
				contact: {
					email: val
				}
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
	const handleLogo = (e) => {
		const val = e.target.value;
		setFormOffer(() => {
			return {
				...formOffer,
				thumb: val
			}
		})
	}
	return (
		<Container>
			<Greeting>Adicionar processo seletivo</Greeting>
			<GreetingText>Preenchar as informações para cadastrar um novo processo seletivo.</GreetingText>
			{/* { formJob.map(item => item) } */}
			<FormWrapper>
				<BaseInput type="text" placeholder="Nome da Empresa" field="company" blur={handleCompany} />
				<BaseInput type="text" placeholder="Cargo" field="role" blur={handleRole} />
				<BaseInput type="email" placeholder="Email do responsável da vaga" blur={handleContact} />
				<BaseInput type="text" placeholder="URL do logo da empresa" blur={handleLogo} />
				<BaseSelect label="Status da vaga" change={handleStatus}></BaseSelect>
				<BaseButton className="button-submit" type="success" click={() => props.onAddOffer(formOffer, loading)}>Salvar</BaseButton>
			</FormWrapper>
			{ loading ? <Loading></Loading> : ''}
		</Container>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddOffer: (payload, loading) => {
			console.log(loading)
			dispatch({ type: actionTypes.ADD_OFFER, payload: payload })
		},
		onRemoveOffer: (id) => dispatch({ type: actionTypes.REMOVE_OFFER, offerId: id })
	}
}

export default connect(null, mapDispatchToProps)(NewJob);
