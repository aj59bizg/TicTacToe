import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native'

import App from '../App';

describe('<App />', () => {
  afterEach(() => {
    cleanup();
  })

  it('should be defined', () => {
    expect(App).toBeTruthy();
  })

  it('should be rendered', () => {
    const { getByTestId, queryAllByTestId, getByText } = render(
      <App />
    )

    expect(getByTestId('app')).toBeTruthy();
    expect(queryAllByTestId('GameBoard')).toHaveLength(2);
    expect(queryAllByTestId('tile')).toHaveLength(18);

    expect(getByText('Reset Game')).toBeTruthy();

    expect(getByText('Player X')).toBeTruthy();
    expect(getByText('Player O')).toBeTruthy();
    expect(getByText('Your Turn')).toBeTruthy();
    expect(getByText('Wait Your Turn')).toBeTruthy();

  })

  it('reset Game button should open reset modal', async () => {
    const { getByTestId, getByText, queryByTestId } = render(
      <App />
    )

    await waitFor(() => {
      expect(getByText('Reset Game')).toBeTruthy();

    })

    expect(queryByTestId('resetGameModal')).toBeNull();
    fireEvent.press(getByText('Reset Game'));
    expect(getByTestId('resetGameModal')).toBeTruthy();
  })
});