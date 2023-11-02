import React, { useState } from 'react';
import { fetchIPInfo } from '../api/api.ts';
import { useIpData } from '../hooks/UseIpData.ts';
import { AxiosResponse } from 'axios';
import { IPResult } from '../types.ts';
import styled from 'styled-components';

const H2Styled = styled.h2`
  color: #dfdede;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 10px;
  background-color: white;
  color: #242424;
`;

const GoButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;
const InputForm: React.FC = () => {
  const [inputIP, setInputIP] = useState('');
  const [error, setError] = useState('');
  const { setIpData } = useIpData();
  const handleIPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // todo add validation for IP address
    setError('');
    setInputIP(e.target.value);
  };

  const fetchIPData = () => {
    fetchIPInfo(inputIP).then((response: AxiosResponse<IPResult>) => {
      if (response.data.success) {
        setIpData(response.data);
      } else {
        setError(response.data.message);
      }
    });
  };

  return (
    <>
      <H2Styled>IP Address Tracker</H2Styled>
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter an IP address"
          value={inputIP}
          onChange={handleIPChange}
        />
        <GoButton onClick={fetchIPData} type="submit">
          ➤
        </GoButton>
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default InputForm;
