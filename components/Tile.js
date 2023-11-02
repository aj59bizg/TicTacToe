import { View, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Tile({ onPress, value }) {
    const getShape = () => {
        if (value === null) {
            return <View testID='tileEmpty' style={styles.square} />;
        }
        if (value === 'O') {
            return (
                <View testID='tileO' style={styles.square}>
                    <View style={styles.circle} />
                </View>
            );
        }
        if (value === 'X') {
            return (
                <View testID='tileX' style={styles.square}>
                    <View style={styles.hamburgerContainer}>
                        <View style={[styles.hamburgerLine, styles.crossLine1]} />
                        <View style={[styles.hamburgerLine, styles.crossLine2]} />
                    </View>
                </View>
            );
        }
    }
    return (
        <View testID='tile'>
            <TouchableOpacity testID='tileTouchable' disabled={value !== null} onPress={() => onPress()} >
                {getShape()}
            </TouchableOpacity>
        </View>
    );
};
