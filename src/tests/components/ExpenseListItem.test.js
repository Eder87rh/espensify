import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListItem } from '../../components/EspenseListItem'
import expenses from '../fixtures/expenses'

test('should render expenseListItem with expense data',() => {
    const wrapper = shallow(<ExpenseListItem { ...expenses[0] }/>)
    expect(wrapper).toMatchSnapshot()
})