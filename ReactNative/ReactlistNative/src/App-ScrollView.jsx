import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}
        contentContainerStyle={styles.content}
      >
        <ScrollView style={styles.container} >
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e expo</Text>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  //conteúdo da ScrollView
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  }
});
