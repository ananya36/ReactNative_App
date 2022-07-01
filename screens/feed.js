import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const feed = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
