
import React from 'react';

const MapInit = () => {
  const mapUrl = 'https://static.maps.2gis.com/1.0?s=500x500&pt=55.581337,37.708334~k:p~c:rd~s:s&zoom=16';

  return (
    <img
      src={mapUrl}
      alt="Карта 2ГИС"
      width="500"
      height="500"
      style={{ border: '1px solid #ccc' }}
    />
  );
};

export default MapInit;