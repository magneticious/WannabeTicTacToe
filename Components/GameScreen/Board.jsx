import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Tile from './Tile';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});

const Board = ({board, handleTurn, player}) => {
  const renderRow = (rowIndex, board, handleTurn) => {
    return board[rowIndex].map((symbol, colIndex) => {
      return (
        <Tile
          key={colIndex}
          symbol={symbol}
          onPress={() => handleTurn(rowIndex, colIndex)}
          player={player}
        />
      );
    });
  };

  const renderBoard = (board, handleTurn) => {
    return board.map((row, rowIndex) => (
      <View key={rowIndex} style={style.row}>
        {renderRow(rowIndex, board, handleTurn)}
      </View>
    ));
  };
  return <View style={style.container}>{renderBoard(board, handleTurn)}</View>;
};

export default Board;
