import { useContext } from 'react';
import { IpDataContext } from '../contexts/IpDataContext.tsx';

export const useIpData = () => {
  const context = useContext(IpDataContext);
  if (context === undefined) {
    throw new Error('Something has happened!');
  }
  return context;
};
