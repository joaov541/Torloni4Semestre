import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        <View style={styles.container}>
          <Text style={styles.textoHello}>Eu te amo Isis</Text>
          <Text style={styles.teste}>Jesus meu primeiro amor</Text>
          <StatusBar style="auto" />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>

  );
}



