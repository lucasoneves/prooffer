import { React, useState } from 'react';
import styled from 'styled-components';
import * as actionTypes from '../../store/actions';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import BaseButton from '../BaseButton/BaseButton';


// Connect
import { connect } from 'react-redux';

const MainButton = styled.button`
  background: transparent;
  display: block;
  margin: 20px 0;
  font-size: 14px;
  padding: 10px;
  border: 0;
  background: darkred;
  color: #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
  min-width: 120px;

  &:hover {
    opacity: .8;
  }
`

const Card = styled.div`
  background: #f2f2f2;
  padding: 20px 30px 30px;
  border-radius: 5px;
  margin: 15px 0;
  box-shadow: 0 0 10px black;
  width: 100%;
  color: #444;
  transition: all .3s ease-in-out;
  opacity: 1;

  p {
    font-size: 14px;
  }  

  &:hover {
    opacity: 1;
  }
`

const Logo = styled.div`
  background: url(${props => props.thumb});
  width: 70px;
  height: 70px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 20px;
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  &.header {
    gap: 10px;
    margin-bottom: 10px;
  }
  
  justify-content: ${props => props.justifyContent};
  flex-wrap: ${props => props.flexWrap};
  gap: ${props => props.gap};
`

const CardJob = (props) => {

  return (
    <Card className={props.classList}>
      <Flex className="header" flexWrap="wrap" justifyContent="space-between">
        <Flex>
          <Logo thumb={props.thumb}></Logo>
          <h2>{props.companyName}</h2>
        </Flex>
        <p>Status: Em Andamento</p>
      </Flex>

      <Flex justifyContent="space-between" flexWrap="wrap" gap="10px">
        <p>{props.role}</p>
        <p>Contato: {props.contact}</p>
        <Flex className="actions">
          <BaseButton><FaRegEdit /> Editar </BaseButton>
          <BaseButton type="danger"><FaRegTrashAlt /> Excluir </BaseButton>
        </Flex>
      </Flex>

    </Card>
  )
}

export default CardJob;
