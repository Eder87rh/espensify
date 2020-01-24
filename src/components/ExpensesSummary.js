import React from 'react';
import { connect } from 'react-redux';
import { getTotalExpenser } from '../selectors/expenses-total'
import expensesFilter from '../selectors/expenses'
import numeral from 'numeral'

export const ExpensesSummary = ({ count, total }) => {
  console.log("TCL: ExpensesSummary -> total", total)
  const expenseWord = count === 1 ? 'expense' : 'expenses'; 
  const totalFormated = numeral(total /100).format('$0,0.00');

  return (
    <h1>
      Viewing { count } { expenseWord } totalling { totalFormated }
    </h1>
  );
}

const mapStateToProps = state => {
  const visibleExpenses = expensesFilter(state.expenses, state.filters)

  return {
    count: visibleExpenses.length,
    total: getTotalExpenser(expensesFilter(state.expenses, state.filters))
  }
}


 
export default connect(mapStateToProps)(ExpensesSummary);