import { React, useState } from "react";
import styled from "styled-components";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import BaseButton from "../BaseButton/BaseButton";

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
    opacity: 0.8;
  }
`;

const Card = styled.div`
  background: rgba(0, 0, 0, .4);
  padding: 20px 30px 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px black;
  width: 100%;
  color: #f2f2f2;
  transition: all 0.3s ease-in-out;
  opacity: 1;

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  &:hover {
    opacity: 1;
  }
`;

const Logo = styled.div`
  background: url(${(props) => props.thumb});
  width: 70px;
  height: 70px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 20px;
  margin-bottom: 15px;

  @media (min-width: ${(props) => props.breakpoint}) {
    margin-bottom: 0;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  &.header {
    margin-bottom: 10px;
    gap: ${(props) => props.gap};
    align-items: ${(props) => props.alignItems};
  }

  justify-content: ${(props) => props.justifyContent};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap};

  @media (max-width: ${(props) => props.breakpoint}) {
    flex-wrap: wrap;
  }

  .actions {
    width: 100%;
  }

  .full-width {
    width: 100%;
  }
`;

const CardJob = (props) => {
  return (
    <Card className={props.classList}>
      <Flex
        className="header"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="flex-end"
        gap="10px"
      >
        <Flex>
          <Logo thumb={props.thumb} breakpoint="640px"></Logo>
          <h2>{props.company_name}</h2>
        </Flex>
        <p>Status: Em Andamento</p>
      </Flex>

      <Flex justifyContent="space-between" flexWrap="wrap" gap="10px">
        <Flex className="full-width" justifyContent="space-between">
          <p>{props.role}</p>
        </Flex>
        <Flex className="full-width" justifyContent="space-between" flexWrap="wrap" gap="10px">
          <p>Contato: {props.contact}</p>
          <Flex className="actions">
            <BaseButton click={props.edit}>
              <FaRegEdit /> Editar{" "}
            </BaseButton>
            <BaseButton type="danger" click={props.clicked}>
              <FaRegTrashAlt /> Excluir{" "}
            </BaseButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardJob;
