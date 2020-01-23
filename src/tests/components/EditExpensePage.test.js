import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, removeExpense

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() }

  wrapper = shallow(<EditExpensePage
    expense={expenses[0]}
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
  />)
})

describe('EditExpensePage tests', () => {
  test('EditExpensePage should render correctly without expenses', () => {
    const wrapper = shallow(<EditExpensePage />)
    expect(wrapper).toMatchSnapshot();
  })

  test('EditExpensePage should render correctly with expense data', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  test('EditExpensePage should save expense edited', () => {
    const editedExpense = {
      ...expenses[0],
      description: "Edited"
    }

    wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense)
    expect(editExpense).toBeCalledWith(expenses[0].id, editedExpense)
    expect(history.push).toBeCalledWith("/")
  })

  test("EditExpensePage should be able to delete expenses", () => {
    wrapper.find("button").prop('onClick')(expenses[0])
    expect(removeExpense).toBeCalledWith({ id: expenses[0].id })
    expect(history.push).toBeCalledWith("/")
  })
});