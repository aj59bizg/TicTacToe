import React from 'react';
import { render, cleanup } from '@testing-library/react-native'

import GameBoard from '../components/GameBoard';

describe('<GameBoard />', () => {
    afterEach(() => {
        cleanup();
    })

    it('should be defined', () => {
        expect(GameBoard).toBeTruthy();
    })

    it('should be rendered', () => {
        const updateBoardStatus = jest.fn();
        const boardStatus = (new Array(9).fill(null));
        const { getByTestId, queryAllByTestId } = render(
            <GameBoard updateBoardStatus={updateBoardStatus} boardStatus={boardStatus} />
        )

        expect(getByTestId('GameBoard')).toBeTruthy();

        expect(queryAllByTestId('tile')).toHaveLength(9);

    })
});