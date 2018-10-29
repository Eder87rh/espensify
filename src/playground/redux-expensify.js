import { createStore, combineReducers } from 'redux'

const expensersReducerDefaultState = []

const expensesReducer = (state = expensersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const filtesReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}

const filtersReducer = (state = filtesReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'poasidhgajf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount
        startDate: undefined,
        endDate: undefined,
    }
}

