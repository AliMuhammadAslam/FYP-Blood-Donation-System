import SystemSetting from 'react-native-system-setting';
import { Alert } from 'react-native';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Linking } from 'react-native';

const checkLocation = async () => {
    const locationStatus = await SystemSetting.isLocationEnabled();
    if (!locationStatus) {
        Alert.alert(
            'Location Permission Required',
            'Please grant permission to access location services to use this feature.',
            [
                {
                    text: 'Settings', onPress: () => {
                        SystemSetting.switchLocation(() => {
                            console.log('switch location successfully');
                        })
                    }
                },
            ],
            { cancelable: false },
        );

    }
    check(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then(result => {
        console.log("result: ", result)
        if (result !== RESULTS.GRANTED) {
          Alert.alert(
            'Location Permission Required',
            'Please grant permission to access location services to use this feature.',
            [
              { text: 'Settings', onPress: () => Linking.openSettings() },
            ],
            { cancelable: false },
          );
        }
      });
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        console.log("result: ", result)
        if (result !== RESULTS.GRANTED) {
          Alert.alert(
            'Location Permission Required',
            'Please grant permission to access location services to use this feature.',
            [
              { text: 'Settings', onPress: () => Linking.openSettings() },
            ],
            { cancelable: false },
          );
        }
      });
}

export default checkLocation;