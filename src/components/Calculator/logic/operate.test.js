import operate from './operate.js'

test('no pramaters', () => {
   expect(operate).toThrow(`Unknown operation 'undefined'`)
});
test('wrong operation', () => {
      const num1 = 8
      const num2 = 2
      const operation= 'a'
   expect(() => operate(num1,num2,operation)).toThrow(`Unknown operation '${operation}'`)
});

test('sum',() => {
      const num1 = 8
      const num2 = 2
      const operation= '+' 
  expect(operate(num1,num2,operation)).toBe("10")
})

test('minus',() => {
      const num1 = 8
      const num2 = 2
      const operation= '-' 
  expect(operate(num1,num2,operation)).toBe("6")
})

test('multiply',() => {
      const num1 = 8
      const num2 = 2
      const operation= 'x' 
  expect(operate(num1,num2,operation)).toBe("16")
})

test('division',() => {
      const num1 = 8
      const num2 = 2
      const operation= '÷' 
  expect(operate(num1,num2,operation)).toBe("4")
})

test('division by 0',() => {
      const num1 = 8
      const num2 = 0
      const operation= '÷' 
  expect(operate(num1,num2,operation)).toBe("Can't divide by 0.")
})

test('mod',() => {
      const num1 = 8
      const num2 = 2
      const operation= '%' 
  expect(operate(num1,num2,operation)).toBe("0")
})

test('mod by 0',() => {
      const num1 = 8
      const num2 = 0
      const operation= '%' 
  expect(operate(num1,num2,operation)).toBe("Can't find modulo as can't divide by 0.")
})