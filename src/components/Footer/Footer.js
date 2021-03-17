import React from 'react'
import styled from 'styled-components'

const WrapperFooter = styled.footer`
	padding: 20px;
	border-top: 1px dotted #638188;
	margin-top: 10em;
`

const Title = styled.h2`
	font-size: 12px;
	text-align: center;
	color: #638188;
`;

const Footer = () => {
	return (
		<WrapperFooter>
			<Title>proffer</Title>
		</WrapperFooter>
	)
}

export default Footer