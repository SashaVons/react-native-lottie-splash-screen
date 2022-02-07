import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SplashScreen from 'react-native-anim-splash-screen';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>(0);

  React.useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
