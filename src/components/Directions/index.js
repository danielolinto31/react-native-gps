import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyDJ6vAJkOZWpobtLAS3h1LUVyeuaxw0tQk"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
