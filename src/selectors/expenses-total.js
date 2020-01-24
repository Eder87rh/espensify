export const getTotalExpenser = (arr) => {
  return arr.reduce((acc, expense) => acc + expense.amount ,0)
}