
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { AuthProvider } from './src/context/AuthContext'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#DDD723" barStyle="dark-content" translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F229',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
