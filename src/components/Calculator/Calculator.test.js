import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Calculator from './Calculator';

const symbols = [
  [
    'AC',
    '+/-',
    '%',
    String.fromCharCode(0x00F7),
  ],

  [7, 8, 9, 'x'],

  [4, 5, 6, String.fromCharCode(0x002D)],

  [1, 2, 3, String.fromCharCode(0x002B)],

  [0, '.', String.fromCharCode(0x003D)],

];

let whatToCalculate = {
  total: null,
  next: null,
  operation: null,
};

const handleCalculations = (update) => {
  whatToCalculate = { ...whatToCalculate, ...update };
};

const renderComponent = () => {
  const { container } = render(<Calculator
    symbols={symbols}
    whatToCalculate={whatToCalculate}
    calculationsHandler={handleCalculations}
  />);
  return container;
};
const updateComponent = (whatToCalculate, container) => {
  const newResult = whatToCalculate;
  render(<Calculator
    symbols={symbols}
    whatToCalculate={newResult}
    calculationsHandler={handleCalculations}
  />, { container });
};

describe('snapshot', () => {
  const calculator = render(<Calculator
    symbols={symbols}
    whatToCalculate={whatToCalculate}
    calculationsHandler={handleCalculations}
  />);
  it('take snapshot', () => {
    expect(calculator).toMatchSnapshot();
  });
});

describe('sum', () => {
  it('add two numbers 1', () => {
    const container = renderComponent();

    fireEvent.click(screen.getByText('8'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('+'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('4'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('='));

    expect(screen.getByRole('math')).toHaveTextContent('12');
  });

  test('add two numbers  2 ', async () => {
    const container = renderComponent();

    fireEvent.click(screen.getByText('8'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('+'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('1'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('0'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('='));

    expect(screen.getByRole('math')).toHaveTextContent('18');
  });

  test('multiple sum', async () => {
    const container = renderComponent();

    fireEvent.click(screen.getByText('8'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('+'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('5'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('+'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('6'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('+'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('9'));

    updateComponent(whatToCalculate, container);

    fireEvent.click(screen.getByText('='));

    expect(screen.getByRole('math')).toHaveTextContent('28');
  });
});
