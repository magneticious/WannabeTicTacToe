import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Board from './Board';
import {StyleSheet} from 'react-native';
import GameEndScreen from './GameEndScreen';
import {Circle} from 'react-native-svg';
import CrossShape from './CrossShape';
import CircleShape from './CircleShape';
import {CIRCLECOLOR, CROSSCOLOR} from './constants';
import minimax from './minimax';
import NeonButton from '../GameScreen/NeonButton';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 10,
    borderRadius: 100,
    shadowColor: '#F5C6EC',
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 50,
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
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  popupText: {
    fontSize: 18,
    marginBottom: 10,
  },
  symbolButton: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  symbolButtonText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbolContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const GameScreen = ({isAI}) => {
  const [player, setPlayer] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [gameFinish, setGameFinish] = useState(false);
  const [aiSymbol, setAiSymbol] = useState('X');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [symbolSelect, setSymbolSelect] = useState(true);

  const handlePlayerSelection = selectedPlayer => {
    setPlayer(selectedPlayer);
    const aiPlayer = selectedPlayer === 'X' ? 'O' : 'X';
    setAiSymbol(aiPlayer);
    setSymbolSelect(false);
  };

  const handleTurn = (row, col) => {
    if (board[row][col] === '') {
      const newBoard = [...board];
      newBoard[row][col] = player;
      setBoard(newBoard);
      if (handleWin(player)) {
        console.log(`${player} wins!`);
        setWinner(player);
        setGameFinish(true);
      } else if (boardIsFull(newBoard)) {
        setIsDraw(true);
        setGameFinish(true);
      } else {
        setPlayer(prevPlayer => (prevPlayer === 'X' ? 'O' : 'X'));
      }
    }
  };
  useEffect(() => {
    if (isAI && player === aiSymbol) {
      handleAITurn();
    }
  }, [player]);

  const handleAITurn = () => {
    const {bestMove, bestBoard} = minimax(board, player);
    const newBoard = [...board];
    newBoard[bestMove.row][bestMove.col] = player;
    setBoard(newBoard);
    if (handleWin(player)) {
      console.log(`${player} wins`);
      setWinner(player);
      setGameFinish(true);
    } else if (boardIsFull(newBoard)) {
      setIsDraw(true);
      setGameFinish(true);
    } else {
      setPlayer(prevPlayer => (prevPlayer === 'X' ? 'O' : 'X'));
    }
  };
  const boardIsFull = board => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === '') {
          // If any cell is empty, the board is not full
          return false;
        }
      }
    }
    // All cells are filled, the board is full
    return true;
  };

  const handleWin = player => {
    const symbol = player === 'X' ? 'X' : 'O';
    //Check rows
    for (let row = 0; row < board.length; row++) {
      if (
        board[row][0] === symbol &&
        board[row][1] === symbol &&
        board[row][2] === symbol
      ) {
        return true;
      }
    }
    //Checks columns
    for (let col = 0; col < board.length; col++) {
      if (
        board[0][col] === symbol &&
        board[1][col] === symbol &&
        board[2][col] === symbol
      ) {
        return true;
      }
    }
    //Check diagonals
    if (
      board[0][0] === symbol &&
      board[1][1] === symbol &&
      board[2][2] === symbol
    ) {
      return true;
    }
    if (
      board[0][2] === symbol &&
      board[1][1] === symbol &&
      board[2][0] === symbol
    ) {
      return true;
    }
    return false;
  };

  const newGame = () => {
    setWinner(null);
    setIsDraw(false);
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setGameFinish(false);
    setSymbolSelect(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={symbolSelect} transparent>
        <View style={styles.popupContainer}>
          <View style={styles.popupContent}>
            <Text style={styles.popupText}>Choose the starting symbol!</Text>
            <TouchableOpacity
              style={[
                styles.symbolButton,
                {borderColor: player === 'X' ? '#F5C6EC' : '#E8A0BF'},
              ]}
              onPress={() => handlePlayerSelection('O')}>
              <View style={styles.symbolContainer}>
                <CircleShape color={CIRCLECOLOR} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.symbolButton,
                {borderColor: player === 'O' ? '#F5C6EC' : '#E8A0BF'},
              ]}
              onPress={() => handlePlayerSelection('X')}>
              <View style={styles.symbolContainer}>
                <CrossShape color={CROSSCOLOR} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          {gameFinish || symbolSelect ? null : (
            <Text style={styles.text}>{player}'s Turn!</Text>
          )}
        </View>
      </View>
      <View style={styles.boardContainer}>
        {winner || isDraw ? (
          <GameEndScreen player={winner} isDraw={isDraw} newGame={newGame} />
        ) : (
          <Board board={board} handleTurn={handleTurn} player={player} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;
