import { Text, View, Modal, Pressable } from 'react-native';
import styles from '../styles';

export default function GameOverModal({ modalVisible, winner, resetGame }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView} testID='gameOverModal'>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Game Over!{"\n"}
                        {winner === "Tie" ? "Tie" : `Winner: ${winner}`}
                    </Text>
                    <Pressable
                        testID='resetGameButton'
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            resetGame();
                        }}>
                        <Text style={styles.textStyle}>Reset Game</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};
