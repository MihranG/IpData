import React, { createContext, useState } from 'react';
import { IConnectionISP, IPResult, ITimeZone } from '../types.ts';
import { LATITUDE, LONGITUDE } from '../constants.ts';

interface IpDataContextProps {
  ipData: IPResult;
  setIpData: React.Dispatch<React.SetStateAction<IPResult>>;
}

export const IpDataContext = createContext<IpDataContextProps | undefined>(
  undefined,
);
interface IProps {
  children: React.ReactNode;
}

const initialIpData = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  ip: '',
  connection: {} as IConnectionISP,
  timezone: { utc: 'UTC' } as ITimeZone,
} as IPResult;
export const IpDataProvider: React.FC<IProps> = ({ children }) => {
  const [ipData, setIpData] = useState<IPResult>(initialIpData);

  return (
    <IpDataContext.Provider value={{ ipData, setIpData }}>
      {children}
    </IpDataContext.Provider>
  );
};
