import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Googlemap extends Component {
  static defaultProps = {
    center: {
      lat: 41.40,
      lng: 2.178
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.AIzaSyDYfGFVkt6stE1a_8niDv3WaU_4ZayWqHU }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.40338 }
            lng={2.17403}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Googlemap;