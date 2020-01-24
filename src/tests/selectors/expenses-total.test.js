import { getTotalExpenser } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';



test('should return 0 if no expenses passed', () => {
  const res = getTotalExpenser([]);
  expect(res).toBe(0);
})

test('should correctly add up a single expense', () => {
  const res = getTotalExpenser([expenses[0]])
  expect(res).toBe(195)
})

test('should correctly add up multiple expenses', () => {
  const res = getTotalExpenser(expenses)
  expect(res).toBe(114195)
})