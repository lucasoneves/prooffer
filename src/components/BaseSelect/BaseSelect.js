import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Select = styled.select`
  background: rgba(0, 0, 0, .4);
  font-size: 14px;
  color: #f2f2f2;
  border-radius: 5px;
  padding: 8px 6px;
  width: 100%;
`;

const BaseSelect = (props) => {
  let [optionsVisible, setOptionsVisible] = useState(false);
  let [valueSelected, setValueSelected] = useState('')
  const [optionsForm, setOptionsForm] = useState([
    {
      value: 1,
      label: "Currículo Enviado",
    },
    {
      value: 2,
      label: "Entrevista RH",
    },
    {
      value: 3,
      label: "Entrevista Gestor",
    },
    {
      value: 4,
      label: "Teste Técnico",
    },
    {
      value: 5,
      label: "Aprovado",
    },
    {
      value: 6,
      label: "Reprovado",
    },
  ]);
  const toggleOptions = () => {
    setOptionsVisible((optionsVisible = !optionsVisible));
  };
  const setOptionSelected = (id, label) => {
    console.log(id)
    setOptionsVisible(false)
    setValueSelected(label)
  }
  return (
    <Select>
      <option>Selecione o status</option>
      {optionsForm.map(item => (

        <option value={item.value} key={item.value}>{item.label}</option>
      )
      )}
    </Select>
  );
};

export default BaseSelect;
