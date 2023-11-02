import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #2d63c1;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 160px;
`;
const Header: React.FC = () => {
  return <HeaderContainer />;
};

export default Header;
