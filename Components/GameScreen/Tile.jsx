import React, {Component, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import CrossShape from './CrossShape';
import CircleShape from './CircleShape';
import {CIRCLECOLOR, CROSSCOLOR} from './constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FBFFDC',
    borderWidth: 2,
    width: 100,
    height: 100,
  },
});
const Tile = ({symbol, onPress}) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    if (!pressed && symbol === '') {
      onPress();
      setPressed(true);
    }
  };
  const renderSymbol = () => {
    if (symbol === 'X') {
      return <CrossShape color={CROSSCOLOR} />;
    } else if (symbol === 'O') {
      return <CircleShape color={CIRCLECOLOR} />;
    } else {
      return null;
    }
  };

  const renderedSymbol = renderSymbol();
  const renderedSymbolType = renderedSymbol ? renderedSymbol.type : null;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      disabled={pressed || symbol !== ''}>
      {renderSymbol()}
    </TouchableOpacity>
  );
};

export default Tile;
