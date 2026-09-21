import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama: Fadheel Abdillah Husen</Text>
      <Text>NIM: 2488010013</Text>
      <Text>Asal Sekolah: MAN 1 CIREBON</Text>
      <Text>Cita-cita: Game Developer</Text>
      <Text>Rencana Menggapai cita-cita: Bermain game sambil belajar pemrograman</Text>
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
