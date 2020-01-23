import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
});

test('should render ExpenseListFIlters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFIlters with alt correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('should filter by text changed', () => {
  wrapper.find('input').simulate('change', { target: { value: "Edited!" }});
  expect(setTextFilter).toHaveBeenLastCalledWith('Edited!')
});

test('should set sort by date', () => {
  wrapper.find('select').simulate('change', { target: { value: 'date' } })
  expect(sortByDate).toHaveBeenCalled()
});

test('should set sort by amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount'} })
  expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: 0, endDate:1 })
  expect(setStartDate).toHaveBeenLastCalledWith(0)
  expect(setEndDate).toHaveBeenLastCalledWith(1)
})

test('Should handle date focus changes', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
  expect(wrapper.state('calendarFocused')).toEqual('endDate')
})

/**
 *  text change
 *  sort by date
 *  sort by amount
 *  should handle date changes
 *  should handle date focus changes
 */