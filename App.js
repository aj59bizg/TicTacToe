import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import GameOverModal from './components/GameOverModal';
import ResetGameModal from './components/ResetGameModal';
import styles from './styles';

export default function App() {

  const [gameOverModalVisible, setGameOverModalVisible] = useState(false);
  const [resetGameModalVisible, setResetGameModalVisible] = useState(false);

  const [boardStatus, setBoardStatus] = useState(new Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [winner, setWinner] = useState(null);

  const updateBoardStatus = (index) => {
    if (boardStatus[index] !== null) {
      return;
    }

    const newBoardStatus = boardStatus.map((c, i) => {
      if (i === index) {
        if (isXturn) {
          return 'X';
        }
        else {
          return 'O';
        }
      } else {
        return c;
      }
    });

    setBoardStatus(newBoardStatus);
    setIsXturn(!isXturn);
    checkForWinner(newBoardStatus);
  };

  const checkForWinner = (boardStatusToCheck) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let foundWinner = false;
    winningCombos.forEach((combo) => {
      const indexA = combo[0];
      const indexB = combo[1];
      const indexC = combo[2];
      if ("X" === boardStatusToCheck[indexA]
        && boardStatusToCheck[indexA] === boardStatusToCheck[indexB]
        && boardStatusToCheck[indexB] === boardStatusToCheck[indexC]) {
        setWinner('X');
        foundWinner = true;
      }
      if ("O" === boardStatusToCheck[indexA]
        && boardStatusToCheck[indexA] === boardStatusToCheck[indexB]
        && boardStatusToCheck[indexB] === boardStatusToCheck[indexC]) {
        setWinner('O');
        foundWinner = true;
      }
    });

    if (!foundWinner && !boardStatusToCheck.includes(null)) {
      setWinner('Tie');
    }
  }

  const resetGame = () => {
    setBoardStatus(new Array(9).fill(null));
    setWinner(null);
    setIsXturn(true);
  }

  const resetGameFromGameOverModal = () => {
    resetGame();
    setGameOverModalVisible(!gameOverModalVisible);
  }

  const resetGameFromResetModal = () => {
    resetGame();
    setResetGameModalVisible(false);
  }

  useEffect(() => {
    if (winner) {
      setGameOverModalVisible(true);
    }
  }, [winner]);

  const yourTurnNotification = (isYourTurn) => {
    if (isYourTurn) {
      return (
        <View style={[styles.button, styles.yourTurn]}>
          <Text style={styles.textStyle}>Your Turn</Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.button, styles.waitYourTurn]}>
          <Text style={styles.textStyle}>Wait Your Turn</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container} testID='app'>
      <View style={styles.centeredView}>
        <View pointerEvents={isXturn ? 'auto' : 'none'}>
          <Text style={{ fontSize: 20 }}>Player X</Text>
          {yourTurnNotification(isXturn)}
          <GameBoard updateBoardStatus={updateBoardStatus} boardStatus={boardStatus} />
        </View>

        <View
          style={{
            padding: 4,
            borderBottomColor: 'blue',
            borderBottomWidth: 10,
            alignSelf: 'stretch'
          }}
        />

        <View pointerEvents={!isXturn ? 'auto' : 'none'}>
          <Text style={{ fontSize: 20 }}>Player O</Text>
          {yourTurnNotification(!isXturn)}
          <GameBoard updateBoardStatus={updateBoardStatus} boardStatus={boardStatus} />
        </View>

        <Pressable
          testID='resetGameAppButton'
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            setResetGameModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Reset Game</Text>
        </Pressable>

        <GameOverModal
          modalVisible={gameOverModalVisible}
          winner={winner}
          resetGame={resetGameFromGameOverModal}
        />

        <ResetGameModal
          modalVisible={resetGameModalVisible}
          resetGame={resetGameFromResetModal}
          closeModal={() => setResetGameModalVisible(false)}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
