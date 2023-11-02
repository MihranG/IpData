import InputForm from './Components/InputForm.tsx';
import Map from './Components/Map.tsx';
import { IpDataProvider } from './contexts/IpDataContext.tsx';
import Header from './Components/HeaderContainer.tsx';
import Card from './Components/Card.tsx';
import styled from 'styled-components';

const ContentWrapperDiv = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
function App() {
  return (
    <IpDataProvider>
      <ContentWrapperDiv>
        <InputForm />
        <Card />
      </ContentWrapperDiv>
      <Header />
      <Map />
    </IpDataProvider>
  );
}

export default App;
