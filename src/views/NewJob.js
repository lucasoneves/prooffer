import React from 'react';
import Container from '../container/Container';
import Greeting from '../components/Greeting/Greeting';
import BaseInput from '../components/BaseInput/BaseInput';
import styled from 'styled-components';

const FormWrapper = styled.form`
	input {
		width: 100%;
		display: block;
	}
`

const newJob = () => {
	return (
		<Container>
			<Greeting>Adicionar processo seletivo</Greeting>
			<FormWrapper>
				<BaseInput type="text" placeholder="Nome da Empresa" />
				<BaseInput type="text" placeholder="Cargo" />
				<BaseInput type="email" placeholder="Email do responsável da vaga" />
				<select>
					<option>Status</option>
					<option>Currículo Enviado</option>
					<option>Entrevista com RH</option>
					<option>Entrevista com Gestor</option>
					<option>Teste técnico</option>
					<option>Aguardando Feedback</option>
					<option>Reprovado</option>
					<option>Aprovado</option>
				</select>
			</FormWrapper>
		</Container>
	)
}

export default newJob;