import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard Component
    </div>
)
const AddExpensePage = () => (
    <div>
        This is from my add expense Component!!
    </div>
)
const EditExpensePage = () => (<div>This is from my edit expense Component!!</div>)
const HelpPage = () => (<div>This is from my help expense PAGE!!</div>)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact/>
            <Route path="/create" component={AddExpensePage} exact/>
            <Route path="/edit" component={EditExpensePage} exact/>
            <Route path="/help" component={HelpPage} exact/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes,document.getElementById('app'))
