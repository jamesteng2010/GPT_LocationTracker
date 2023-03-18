import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationTracker = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error:any) => setError(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View>
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <View>
          <Text>Latitude: {latitude}</Text>
          <Text>Longitude: {longitude}</Text>
        </View>
      )}
    </View>
  );
};

export default LocationTracker;
