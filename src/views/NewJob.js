import React, {useState} from 'react';
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

const NewJob = () => {
	const [formJob, setFormJob] = useState([]);

	const setVal = (field, val) => {
		const fieldToAdd = field
		console.log(val.target.value)
		console.log(fieldToAdd)
		setFormJob({ fieldToAdd: val.target.value})
	}
	return (
		<Container>
			<Greeting>Adicionar processo seletivo</Greeting>
			<GreetingText>Preenchar as informações para cadastrar um novo processo seletivo.</GreetingText>
			{/* { formJob.map(item => item) } */}
			<FormWrapper>
				<BaseInput type="text" placeholder="Nome da Empresa" change={(val) => setVal('company', val)}  />
				<BaseInput type="text" placeholder="Cargo" change={(val) => setVal('role', val)} />
				<BaseInput type="email" placeholder="Email do responsável da vaga" change={(val, field) => setVal(field, val)} />
				<BaseSelect label="Status da vaga"></BaseSelect>
				
				<BaseButton className="button-submit" type="success">Salvar</BaseButton>
			</FormWrapper>
		</Container>
	)
}

export default NewJob;