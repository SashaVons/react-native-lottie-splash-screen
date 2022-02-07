import { NativeModules } from 'react-native';

const ReactNativeLottieSplashScreen =
  NativeModules.ReactNativeLottieSplashScreen;

const SplashScreen = {
  show: () => {
    ReactNativeLottieSplashScreen.show();
  },
  hide: () => {
    ReactNativeLottieSplashScreen.hide();
  },
};

export default SplashScreen;
