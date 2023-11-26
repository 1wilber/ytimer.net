import { beforeAll, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store as mockStore } from "@/test/mocks/store";
import { updateEvent } from '@/reducers/timerReducer';
import { EventsList } from '.';

describe('EventsList', () => {

  const getRootEventsList = () => screen.getByTestId('root-events-list');
  const getWcaEventSelector = () => screen.getByTestId('select-events-list');

  beforeAll(() => {
    render(
      <Provider store={mockStore}>
        <EventsList />
      </Provider>
    );
  })

  it('should render the component', () => {
    expect(getRootEventsList()).toBeDefined();
  })

  it('should render the component with the correct label', () => {
    expect(screen.getByText('Evento')).toBeDefined();
  })

  it('changes selected event correctly at redux store', () => {
    mockStore.clearActions()

    fireEvent.change(getWcaEventSelector(), { target: { value: '444' } })

    const expectedAction = updateEvent('444');
    expect(mockStore.getActions()).toEqual([expectedAction])
  })

  describe('events selector have the correct options', () => {
    it('should render options for 2x2', () => {
      expect(
        getWcaEventSelector().querySelector('option[value="222"]')
      ).toBeDefined();

      expect(
        getWcaEventSelector().querySelector('option[value="222"]').textContent
      ).toBe('2x2')
    })

    it('should render options for 3x3', () => {
      expect(
        getWcaEventSelector().querySelector('option[value="333"]')
      ).toBeDefined();

      expect(
        getWcaEventSelector().querySelector('option[value="333"]').textContent
      ).toBe('3x3')
    })

    it('should render options for 4x4', () => {
      expect(
        getWcaEventSelector().querySelector('option[value="444"]')
      ).toBeDefined();

      expect(
        getWcaEventSelector().querySelector('option[value="444"]').textContent
      ).toBe('4x4')
    })

    it('should render options for 5x5', () => {
      expect(
        getWcaEventSelector().querySelector('option[value="555"]')
      ).toBeDefined();

      expect(
        getWcaEventSelector().querySelector('option[value="555"]').textContent
      ).toBe('5x5')
    })

    it('should render options for 6x6', () => {
      expect(
        getWcaEventSelector().querySelector('option[value="666"]')
      ).toBeDefined();

      expect(
        getWcaEventSelector().querySelector('option[value="666"]').textContent
      ).toBe('6x6')
    })

    it('should render options for 7x7', () => {
      expect(
        getWcaEventSelector().querySelector('option[value="777"]')
      ).toBeDefined();

      expect(
        getWcaEventSelector().querySelector('option[value="777"]').textContent
      ).toBe('7x7')
    })
  })
});
