import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native'

import GameOverModal from '../components/GameOverModal';

describe('<GameOverModal />', () => {
    afterEach(() => {
        cleanup();
    })

    it('should be defined', () => {
        expect(GameOverModal).toBeTruthy();
    })

    it('should be rendered', () => {
        const { getByTestId } = render(
            <GameOverModal />
        )

        expect(getByTestId('gameOverModal')).toBeTruthy();
    })

    it('should reset game when pressed', async () => {
        const resetGame = jest.fn();
        const { getByTestId } = render(
            <GameOverModal modalVisible={true} resetGame={resetGame} winner={'Tie'} />
        );
        await waitFor(() => {
            expect(getByTestId('resetGameButton')).toBeTruthy();

        })

        const resetGameButton = getByTestId('resetGameButton');

        fireEvent.press(resetGameButton);

        expect(resetGame).toHaveBeenCalled();
    })

    describe('should display the correct winner', () => {
        it('Tie', async () => {
            const resetGame = jest.fn();
            const { getByText } = render(
                <GameOverModal modalVisible={true} resetGame={resetGame} winner={'Tie'} />
            );
            expect(getByText('Game Over!\nTie')).toBeTruthy();
        })
        it('X Wins', async () => {
            const resetGame = jest.fn();
            const { getByText } = render(
                <GameOverModal modalVisible={true} resetGame={resetGame} winner={'X'} />
            );
            expect(getByText('Game Over!\nWinner: X')).toBeTruthy();
        })
        it('Y Wins', async () => {
            const resetGame = jest.fn();
            const { getByText } = render(
                <GameOverModal modalVisible={true} resetGame={resetGame} winner={'Y'} />
            );
            expect(getByText('Game Over!\nWinner: Y')).toBeTruthy();
        })
    })

});