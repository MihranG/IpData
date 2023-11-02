import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useIpData } from '../hooks/UseIpData.ts';
import { LATITUDE, LONGITUDE } from '../constants.ts';
import styled from 'styled-components';

const MapWrapperDiv = styled.div`
  position: relative;
  z-index: 1;
`;
function ChangeView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}): null {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map: React.FC = () => {
  const { ipData } = useIpData();
  const { longitude, latitude } = ipData;
  const position: [number, number] = [
    latitude ?? LATITUDE,
    longitude ?? LONGITUDE,
  ];
  return (
    <MapWrapperDiv>
      <MapContainer
        zoom={13}
        center={position}
        style={{ height: '400px' }}
        scrollWheelZoom={false}
      >
        <ChangeView center={position} zoom={13} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapperDiv>
  );
};

export default Map;
