import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({description:'Water bill'}))
store.dispatch(addExpense({description:'Gas bill'}))
store.dispatch(setTextFilter('Water'))

console.log(store.getState())
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

ReactDOM.render(<AppRouter/>,document.getElementById('app'))
