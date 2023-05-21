import React from 'react';
import {Button} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import NeonButton from '../GameScreen/NeonButton';
import {useNavigation} from '@react-navigation/native';
import {matrixTransform} from 'react-native-svg/lib/typescript/elements/Shape';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', //Centered horizontally
    flex: 1,
  },
  text: {
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 40,
    color: '#F5C6EC',
    borderWidth: 2,
    borderColor: '#E8A0BF',
    padding: 10,
    borderRadius: 20,
    borderColor: '#F5C6EC',
    textShadowColor: '#E8A0BF',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  buttonsContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    paddingBottom: 100,
    marginHorizontal: 40,
    paddingHorizontal: 50,
  },
});

const LandingScreen = () => {
  const navigation = useNavigation();

  const startGameAI = isAi => {
    if (isAi) {
      navigation.navigate('GameAI');
    } else {
      navigation.navigate('Game2P');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Wannabe TicTacToe!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <NeonButton
            title="Play against player!"
            onPress={() => startGameAI(false)}
          />
        </View>
        <View style={styles.button}>
          <NeonButton
            title="Play against AI!"
            onPress={() => startGameAI(true)}
          />
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
