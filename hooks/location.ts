import * as React from 'react';
import * as Location from 'expo-location';

export default function useLocation() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const getLocation = React.useCallback(async () => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Уучлаарай, та байршлыг тогтоох эрхийг нээж өгөөгүй байна');
      return;
    }
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    setLocation(location);
  }, []);

  React.useEffect(() => {
    getLocation();
  }, []);

  return {location, errorMsg};
}
