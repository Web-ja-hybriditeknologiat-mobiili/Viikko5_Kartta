import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView } from 'react-native';
import Map from './screens/Map';


export default function App() {


  return (
    <SafeAreaView>
  <Map />

    </SafeAreaView>
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
