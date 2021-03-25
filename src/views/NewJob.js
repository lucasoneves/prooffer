import React from 'react';
import Container from '../container/Container';
import Greeting from '../components/Greeting/Greeting';
import BaseInput from '../components/BaseInput/BaseInput';
import BaseSelect from '../components/BaseSelect/BaseSelect';
import BaseButton from '../components/BaseButton/BaseButton';
import styled from 'styled-components';

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

const newJob = () => {
	return (
		<Container>
			<Greeting>Adicionar processo seletivo</Greeting>
			<GreetingText>Preenchar as informações para cadastrar um novo processo seletivo.</GreetingText>
			<FormWrapper>
				<BaseInput type="text" placeholder="Nome da Empresa" />
				<BaseInput type="text" placeholder="Cargo" />
				<BaseInput type="email" placeholder="Email do responsável da vaga" />
				<BaseSelect label="Status da vaga"></BaseSelect>
				{/* <select>
					<option>Status</option>
					<option>Currículo Enviado</option>
					<option>Entrevista com RH</option>
					<option>Entrevista com Gestor</option>
					<option>Teste técnico</option>
					<option>Aguardando Feedback</option>
					<option>Reprovado</option>
					<option>Aprovado</option>
				</select> */}
				<BaseButton className="button-submit" type="success">Salvar</BaseButton>
			</FormWrapper>
		</Container>
	)
}

export default newJob;