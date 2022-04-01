import calculate from './calculate';

const obj = {
  next: null,
  total: null,
  operation: null,
};
let buttonName = '';
let result = {};
describe('calculate.js test general', () => {
  it('no prameters or invalid parmeters', () => {
    expect(calculate).toThrow(Error('Cannot read properties of undefined (reading \'match\')'));
    expect(() => calculate({}, undefined))
      .toThrow(Error('Cannot read properties of undefined (reading \'match\')'));
    expect(() => calculate(undefined, '='))
      .toThrow(Error('Cannot read properties of undefined (reading \'next\')'));
  });

  it('pass a number', () => {
    buttonName = '2';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('2');
  });
  it('pass an operation', () => {
    buttonName = '+';
    result = calculate(obj, buttonName);
    expect(result.operation).toBe('+');

    obj.total = '4';
    result = calculate(obj, buttonName);
    expect(result.operation).toBe('+');
  });
  it('pass an operation with exsiting number', () => {
    obj.next = '2';
    buttonName = '+';
    result = calculate(obj, buttonName);
    expect(result.operation).toBe('+');
    expect(result.total).toBe('2');
  });
  it('pass a number with exsiting number', () => {
    obj.next = '2';
    buttonName = '3';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('23');
  });
  it('pass a number with exsiting number & exsiting operation', () => {
    obj.total = '2';
    obj.operation = '+';
    obj.next = null;
    buttonName = '4';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('4');
  });

  it('pass equal sign  with exsiting operation', () => {
    obj.next = '2';
    obj.total = '8';
    obj.operation = '+';
    buttonName = '=';
    result = calculate(obj, buttonName);
    expect(result.total).toBe('10');
  });
  it('pass AC operation', () => {
    obj.next = '2';
    obj.total = '8';
    obj.operation = '+';
    buttonName = 'AC';
    result = calculate(obj, buttonName);
    expect(result.total).toBe(null);
  });
  it('pass equal sign with null object', () => {
    obj.next = null;
    obj.total = null;
    obj.operation = null;
    buttonName = '=';
    result = calculate(obj, buttonName);
    expect(result.total).toBe(undefined);
  });
  it('pass operation sign with exsiting operation', () => {
    obj.next = '2';
    obj.total = '8';
    obj.operation = '+';
    buttonName = '+';
    result = calculate(obj, buttonName);
    expect(result.total).toBe('10');
    expect(result.operation).toBe('+');
  });
  it('buttonName & next equal 0', () => {
    obj.next = '0';
    buttonName = '0';
    result = calculate(obj, buttonName);
    expect(result.total).toBe(undefined);
  });
  it('pass a number with exsiting number & operation', () => {
    obj.next = '2';
    buttonName = '3';
    obj.operation = '+';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('23');
  });
});

describe('calculate.js test dot operation', () => {
  it('obj all null', () => {
    obj.operation = null;
    obj.total = null;
    obj.next = null;
    buttonName = '.';
    result = calculate(obj, buttonName);
    expect(result.total).toBe('0.');

    obj.next = null;
    obj.total = '12';
    result = calculate(obj, buttonName);
    expect(result.total).toBe('12.');
  });
  it('exsiting number', () => {
    obj.operation = null;
    obj.total = null;
    obj.next = '8';
    buttonName = '.';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('8.');

    obj.next = null;
    obj.total = '12';
    result = calculate(obj, buttonName);
    expect(result.total).toBe('12.');
  });
  it('exsiting float number', () => {
    obj.operation = null;
    obj.total = null;
    obj.next = '0.8';
    buttonName = '.';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('0.8');

    obj.next = null;
    obj.total = '12.1';
    result = calculate(obj, buttonName);
    expect(result.total).toBe(undefined);
  });
  it('exsiting operation', () => {
    obj.operation = '+';
    obj.total = null;
    obj.next = null;
    buttonName = '.';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('0.');
  });
  it('exsiting operation', () => {
    obj.operation = '+';
    obj.total = null;
    obj.next = null;
    buttonName = '.';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('0.');
  });
});

describe('calculate.js test +/- operation', () => {
  it('obj all null', () => {
    obj.operation = null;
    obj.total = null;
    obj.next = null;
    buttonName = '+/-';
    result = calculate(obj, buttonName);
    expect(result.total).toBe();
  });
  it('exsiting number', () => {
    obj.operation = null;
    obj.total = null;
    obj.next = '8';
    buttonName = '+/-';
    result = calculate(obj, buttonName);
    expect(result.next).toBe('-8');

    obj.next = null;
    obj.total = '12';
    result = calculate(obj, buttonName);
    expect(result.total).toBe('-12');
  });
});
