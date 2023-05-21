import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import GameScreen from './Components/GameScreen/GameScreen';
import LinearGradient from 'react-native-linear-gradient';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import LandingScreen from './Components/LandingScreen/Landing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <LinearGradient
      colors={[
        'rgba(40,91,212,0.73)',
        'rgba(171,53,163,0.45)',
        'rgba(255,204,112,0.37)',
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <NavigationContainer theme={navTheme}>
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={LandingScreen} />
            <Stack.Screen name="Game2P">
              {() => <GameScreen isAI={false} />}
            </Stack.Screen>
            <Stack.Screen name="GameAI">
              {() => <GameScreen isAI={true} />}
            </Stack.Screen>
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </LinearGradient>
  );
};
export default App;
