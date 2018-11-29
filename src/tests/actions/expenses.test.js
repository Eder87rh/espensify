import { addExpense, editExpense, removeExpense }  from '../../actions/expenses'

test('Should setup remove expense action object', () => {
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit an expense action object',() => {
    const action = editExpense('123abc',{description: 'Description edited'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            description:'Description edited'
        }
    })
})

test('should setup ad expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'Thos was last month rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup ad expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
})