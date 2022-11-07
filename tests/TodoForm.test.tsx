import { TodoForm } from '@/components/TodoForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<TodoForm/>', () => {
  const setup = () => {
    const onInsert = jest.fn();
    const utils = render(<TodoForm onInsert={onInsert} />);
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const button = screen.getByText('등록하기');

    return {
      ...utils,
      input,
      button,
      onInsert,
    };
  };

  it('has input and a button', () => {
    const { input, button } = setup();

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('change input', () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: 'TDD-TODO',
      },
    });

    expect(input).toHaveAttribute('value', 'TDD-TODO');
  });

  it('calls onInsert and clears input', () => {
    const { input, button, onInsert } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD-TODO',
      },
    });
    fireEvent.click(button);

    expect(onInsert).toBeCalledWith('TDD-TODO');
    expect(input).toHaveAttribute('value', '');
  });
});
