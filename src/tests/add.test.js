const add = (a, b)  => a + b
const generateGreeting = (name='Anonimous') => `Hello ${name}!`

test('shold add two numbers', () => {
    const result = add(3,4)
    expect(result).toBe(7)
})

test('should generate greeting',() => {
    const result = generateGreeting('Eder')
    expect(result).toBe('Hello Eder!')
})

test('should generate greeting for no name',() => {
    const result = generateGreeting()
    expect(result).toBe('Hello Anonimous!')
})