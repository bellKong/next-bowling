import CounterApp from '@/components/CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<CounterApp>', () => {
  const setup = () => {
    const utils = render(<CounterApp />);

    const label = screen.getByLabelText(0);
    const plusButton = screen.getByText('+');
    const minusButton = screen.getByText('-');

    return {
      ...utils,
      label,
      plusButton,
      minusButton,
    };
  };

  it('has label, plus Button, minus Button', () => {
    const { label, plusButton, minusButton } = setup();

    expect(label).toBeTruthy();
    expect(plusButton).toBeTruthy();
    expect(minusButton).toBeTruthy();
  });

  it('calls onIncrement', () => {
    const { plusButton, label } = setup();
    fireEvent.click(plusButton);
    expect(label).toHaveValue(1);
  });

  it('calls onDecrement', () => {
    const { minusButton, label } = setup();
    fireEvent.click(minusButton);
    expect(label).toHaveValue(-11);
  });
});
