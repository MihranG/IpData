import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useIpData } from '../hooks/UseIpData.ts';
import { fetchUserLocation } from '../api/api.ts';
import { AxiosResponse } from 'axios';
import { IPResult } from '../types.ts';

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
  margin: 20px 0;
  width: 70%;
  display: flex;
  border-radius: 5px;
`;

const CardSection = styled.div`
  flex: 1;
  padding: 10px;
  color: #373737;
`;

const CardSectionDivider = styled.div`
  width: 1px;
  background-color: #ddd;
  margin: 10px 0;
`;

const CardSectionTitle = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
  color: #7f7f7f;
`;

const Card: React.FC = () => {
  const { ipData, setIpData } = useIpData();
  useEffect(() => {
    fetchUserLocation()
      .then((response: AxiosResponse<IPResult>) => {
        setIpData(response.data);
        // todo avoid repeating requests
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setIpData]);

  return (
    <CardContainer>
      <CardSection>
        <CardSectionTitle>Ip address </CardSectionTitle>
        {ipData?.ip}
      </CardSection>
      <CardSectionDivider />
      <CardSection>
        <CardSectionTitle> Location </CardSectionTitle>
        {ipData?.city}, {ipData?.region}, {ipData?.country}
      </CardSection>
      <CardSectionDivider />
      <CardSection>
        <CardSectionTitle> TimeZone</CardSectionTitle>
        {ipData?.timezone?.utc}
      </CardSection>
      <CardSectionDivider />
      <CardSection>
        <CardSectionTitle>ISP</CardSectionTitle>
        {ipData?.connection?.isp}
      </CardSection>
    </CardContainer>
  );
};

export default Card;
