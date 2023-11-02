//this is for changing leaflet map default behaviour as it is not being updated after initial setting to a center
import { useMap } from 'react-leaflet';

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
export default ChangeView;
