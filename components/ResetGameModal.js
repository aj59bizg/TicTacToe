import { Text, View, Modal, Pressable } from 'react-native';
import styles from '../styles';

export default function ResetGameModal({ modalVisible, resetGame, closeModal }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView} testID='resetGameModal'>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you sure?</Text>
                    <Pressable
                        testID='resetGameButton'
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => resetGame()}>
                        <Text style={styles.textStyle}>Reset Game</Text>
                    </Pressable>
                    <Pressable
                        testID='cancelButton'
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => closeModal()}>
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};
