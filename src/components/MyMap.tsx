import React from "react";
import { withGoogleMap, WithGoogleMapProps, GoogleMap, Marker } from "react-google-maps"

export const MyLocationOnMap = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  );
});
