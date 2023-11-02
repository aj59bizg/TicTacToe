import { View } from 'react-native';
import Tile from './Tile';

export default function GameBoard({ updateBoardStatus, boardStatus }) {
    const renderTile = (i) => {
        return <Tile onPress={() => updateBoardStatus(i)} value={boardStatus[i]} />
    }
    return (
        <View
            testID='GameBoard'
        >
            <View
                style={[
                    {
                        flexDirection: 'row',
                    },
                ]}>
                {renderTile(0)}
                {renderTile(1)}
                {renderTile(2)}
            </View>
            <View
                style={[
                    {
                        flexDirection: 'row',
                    },
                ]}>
                {renderTile(3)}
                {renderTile(4)}
                {renderTile(5)}
            </View>
            <View
                style={[
                    {
                        flexDirection: 'row',
                    },
                ]}>
                {renderTile(6)}
                {renderTile(7)}
                {renderTile(8)}
            </View>
        </View>
    );
};
