import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const aboutus = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text>About Us</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default aboutus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

