import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Equipos from './screens/Equipos';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Equipos />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
