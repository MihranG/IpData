export interface IIpData {
  position: [number, number];
  ipAddress: string;
  ISP: string;
  timezone: string;
}

export interface IConnectionISP {
  asn: number;
  org: string;
  isp: string;
  domain: string;
}

export interface ITimeZone {
  id: string;
  abbr: string;
  is_dst: boolean;
  offset: number;
  utc: string;
  current_time: string;
}
export interface IPResult {
  ip: string;
  success: boolean;
  message: string;
  type: string;
  continent: string;
  country: string;
  country_code: string;
  region: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  is_eu: boolean;
  postal: string;
  calling_code: string;
  capital: string;
  borders: string;
  connection: IConnectionISP;
  timezone: ITimeZone;
}
