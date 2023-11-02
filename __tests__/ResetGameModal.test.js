import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native'

import ResetGameModal from '../components/ResetGameModal';

describe('<ResetGameModal />', () => {
    afterEach(() => {
        cleanup();
    })

    it('should be defined', () => {
        expect(ResetGameModal).toBeTruthy();
    })

    it('should be rendered', () => {
        const { getByTestId, getByText } = render(
            <ResetGameModal />
        )

        expect(getByTestId('resetGameModal')).toBeTruthy();
        expect(getByText('Are you sure?')).toBeTruthy();
    })

    it('should reset game when pressed', async () => {
        const resetGame = jest.fn();
        const { getByTestId } = render(
            <ResetGameModal modalVisible={true} resetGame={resetGame} />
        );
        await waitFor(() => {
            expect(getByTestId('resetGameButton')).toBeTruthy();
        })

        const resetGameButton = getByTestId('resetGameButton');

        fireEvent.press(resetGameButton);

        expect(resetGame).toHaveBeenCalled();
    })

    it('should close modal when pressed', async () => {
        const resetGame = jest.fn();
        const closeModal = jest.fn();
        const { getByTestId } = render(
            <ResetGameModal modalVisible={true} resetGame={resetGame} closeModal={closeModal} />
        );
        await waitFor(() => {
            expect(getByTestId('cancelButton')).toBeTruthy();
        })

        const cancelButton = getByTestId('cancelButton');

        fireEvent.press(cancelButton);

        expect(closeModal).toHaveBeenCalled();
    })
});
