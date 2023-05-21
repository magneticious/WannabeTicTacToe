import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const NeonButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#BA90C6',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#E11299',
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 8,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#E3F4F4',
    textShadowColor: '#BA90C6',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
});

export default NeonButton;
