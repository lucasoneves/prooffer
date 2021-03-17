import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const BaseSelectWrapper = styled.div`
  background: #fff;
  font-size: 14px;
  color: #666;
  border-radius: 5px;
`;

const BaseSelectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Options = styled.div`
  span {
    display: block;
    padding: 10px;
  }
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
    <BaseSelectWrapper>
      <BaseSelectHeader onClick={toggleOptions}>
        {valueSelected}
        {optionsVisible ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}
      </BaseSelectHeader>
      {optionsVisible ? (
        <Options>
          {optionsForm.map(item => (
            <span key={item.value} onClick={() => setOptionSelected(item.value, item.label)}> {item.label}</span>
          ))}
        </Options>
      ) : (
        ""
      )}
    </BaseSelectWrapper>
  );
};

export default BaseSelect;
