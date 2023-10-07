import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingList from './src/screens/ShoppingList';

export default function App() {
  const {
    container
  } = styles
  return (
    <View style={container}>
      <ShoppingList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
