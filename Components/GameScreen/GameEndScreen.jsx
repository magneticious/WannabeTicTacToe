import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import NeonButton from './NeonButton';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 50,
    color: '#F5C6EC',
    borderWidth: 2,
    borderColor: '#E8A0BF',
    borderRadius: 20,
    borderColor: '#F5C6EC',
    textShadowColor: '#E8A0BF',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
    alignSelf: 'stretch', // Set text alignment to stretch
    textAlign: 'center', // Center align the text
  },
  buttonContainer: {
    paddingTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const GameEndScreen = ({player, isDraw, newGame}) => {
  const navigation = useNavigation();

  const homeNav = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {isDraw ? 'The game is draw!' : `${player} is the WINNER!`}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <NeonButton title="Play Again!" onPress={newGame} />
        <NeonButton title="Home" onPress={homeNav} />
      </View>
    </SafeAreaView>
  );
};

export default GameEndScreen;
