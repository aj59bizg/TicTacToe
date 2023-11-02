import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native'

import Tile from '../components/Tile';

describe('<Tile />', () => {
    afterEach(() => {
        cleanup();
    })

    it('should be defined', () => {
        expect(Tile).toBeTruthy();
    })

    it('should be rendered', () => {
        const { getByTestId } = render(
            <Tile />
        )

        expect(getByTestId('tile')).toBeTruthy();
        expect(getByTestId('tileTouchable')).toBeTruthy();
    })

    it('onPress should be called when value is null', async () => {
        const onPress = jest.fn();

        const { getByTestId } = render(
            <Tile onPress={onPress} value={null} />
        );
        await waitFor(() => {
            expect(getByTestId('tileTouchable')).toBeTruthy();

        })

        const touchable = getByTestId('tileTouchable');

        fireEvent.press(touchable);

        expect(onPress).toHaveBeenCalled();
    })

    it('onPress should be called when value is not null', async () => {
        const onPress = jest.fn();
        const { getByTestId } = render(
            <Tile onPress={onPress} value={'X'} />
        );
        await waitFor(() => {
            expect(getByTestId('tileTouchable')).toBeTruthy();

        })

        const touchable = getByTestId('tileTouchable');

        fireEvent.press(touchable);

        expect(onPress).toHaveBeenCalledTimes(0);

    })

    describe('should render the correct tile', () => {
        it('tile empty', () => {
            const onPress = jest.fn();
            const { getByTestId, queryByTestId } = render(
                <Tile onPress={onPress} value={null} />
            );

            expect(getByTestId('tileEmpty')).toBeTruthy();
            expect(queryByTestId('tileX')).toBeNull();
            expect(queryByTestId('tileO')).toBeNull();
        })

        it('tile X', () => {
            const onPress = jest.fn();
            const { getByTestId, queryByTestId } = render(
                <Tile onPress={onPress} value={'X'} />
            );

            expect(getByTestId('tileX')).toBeTruthy();
            expect(queryByTestId('tileEmpty')).toBeNull();
            expect(queryByTestId('tileO')).toBeNull();
        })

        it('tile O', () => {
            const onPress = jest.fn();
            const { getByTestId, queryByTestId } = render(
                <Tile onPress={onPress} value={'O'} />
            );

            expect(getByTestId('tileO')).toBeTruthy();
            expect(queryByTestId('tileX')).toBeNull();
            expect(queryByTestId('tileEmpty')).toBeNull();
        })
    })
});