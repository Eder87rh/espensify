import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

/* test('Should render correctly without expenses', () => {
  const wrapper = shallow(<ExpensesSummary  count={0} total={0}/>)
  const text = wrapper.find('h1').text()
  
  expect(wrapper).toMatchSnapshot(wrapper)
  expect(text).toBe('Viewing 0 expenses totalling $0.00')
}) */

test('Should render correctly with expenses', () => {
  const wrapper = shallow(<ExpensesSummary count={3} total={10000}/>)
  const text = wrapper.find('h1').text()
  expect(wrapper).toMatchSnapshot(wrapper)
  expect(text).toBe('Viewing 3 expenses totalling $100.00')
})