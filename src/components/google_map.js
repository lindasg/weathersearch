import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD9fx1k_YYbYT6KM4WrRbkS8mJzFpKerFQ",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `200px`, width:`200px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: props.lat, lng: props.lon }}
  >
    <Marker position={{ lat: props.lat, lng: props.lon }} />
  </GoogleMap>
)


export default MyMapComponent;
