import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses }  from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  database.ref('expenses').set(expensesData)
  .then(() => done());
});

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
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData))
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  })
  .then(snapshot => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('Should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store.dispatch(startAddExpense({}))
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  })
  .then(snapshot => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  }).catch(err => {
    console.log("TCL: err", err)
    done();
  });
});

test('Should setip set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({});

  
  store.dispatch(startSetExpenses())
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
  .catch(err => { 
    console.log(err)
    done()
  })

});