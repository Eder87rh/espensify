import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


const addExpense = ({ 
    description = '', 
    note = '', 
    amount=0, 
    createdAt = 0 
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    }
})

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text,
})

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type:'SORT_BY_DATE'
})

const setStartDate = (date) => ({
    type:'SET_START_DATE',
    date
})

const setEndDate = date => ({
    type:'SET_END_DATE',
    date
})


const expensersReducerDefaultState = []

const expensesReducer = (state = expensersReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates,
                    }
                }else{
                    return expense
                }
            })
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
        case 'SET_TEXT':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return  {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
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


store.subscribe(() => {
    console.log(store.getState())
})

/* const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount:100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount:300 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))


store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 } ))
store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate()) */

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))
//store.dispatch(setEndDate())



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