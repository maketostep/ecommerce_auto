import { Map, Placemark, YMaps } from 'react-yandex-maps';

const LOCATION = {
  center: [37.588144, 55.733842],
  zoom: 9
};

export default function MapInit() {
  return (
    <YMaps >
      <Map width={1220} height={390} defaultState={{ center: [55.581758, 37.707565], zoom: 16 }}>
        <Placemark defaultGeometry={[55.581758, 37.707565]} />
      </Map>
    </YMaps>
  );
}