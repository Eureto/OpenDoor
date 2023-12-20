import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const ewelink = require('./ewelink-api-custom');
export default async function App() {
  console.log("-----------------start programu-----------------");
  
  
});
  /* get all devices */
  const devices = await connection.getDevices();
  console.log(devices);
  





  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
