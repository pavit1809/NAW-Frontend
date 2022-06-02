import React, { useEffect, useLayoutEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import Profile from "../assets/images/author.png";
import MapUserCard from "./MapUserCard";

// useLayoutEffect = useEffect;

export const DisplayMap = ({ google }) => {
  const [showUserData, setShowuserData] = useState(false);
  const [activemarker, setActiveMarker] = useState();

  const users = [
    {
      position: { lat: 47.49855629475769, lng: -122.14184416996333 },
      ProfileImage: Profile,
    },
    { position: { lat: 47.359423, lng: -122.021071 }, ProfileImage: Profile },
    {
      position: { lat: 47.2052192687988, lng: -121.988426208496 },
      ProfileImage: Profile,
    },
    { position: { lat: 47.6307081, lng: -122.1434325 }, ProfileImage: Profile },
    { position: { lat: 47.3084488, lng: -122.2140121 }, ProfileImage: Profile },
    { position: { lat: 47.5524695, lng: -122.0425407 }, ProfileImage: Profile },
  ];

  const handleMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
  };

  return (
    <Map
      google={google}
      zoom={8}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      {users.map((item, index) => (
        <Marker
          position={item.position}
          key={index}
          icon={{
            url: item.ProfileImage,
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(53, 53),
          }}
          onMouseover={() => setShowuserData(true)}
          onClick={handleMarkerClick}
        />
      ))}
      {/* <InfoWindow marker={activemarker} visible={showUserData}>
        <MapUserCard />
      </InfoWindow> */}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBG0NPYP8_BJ_IkyIEwcDcvGQ4C65X-So8",
})(DisplayMap);
