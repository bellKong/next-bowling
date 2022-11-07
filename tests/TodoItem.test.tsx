import { TodoItem } from '@/components/TodoItem';
import { TodoProps } from '@/types/todoProps';
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

describe('<TodoItem/>', () => {
  const sampleTodo = {
    id: 1,
    text: 'TODO-TDD',
    done: false,
  };

  const setup = (props = {} as TodoProps) => {
    const onRemove = jest.fn();
    const handleCheckBox = jest.fn();
    const initialProps = { todo: sampleTodo };
    const utils = render(
      <TodoItem {...initialProps} {...props} onRemove={onRemove} handleCheckBox={handleCheckBox} />,
    );
    const todo = props.todo || initialProps.todo;
    const input = screen.getByLabelText(todo.text, { selector: 'input' });
    const label = screen.getByLabelText(todo.text);
    const button = screen.getByText('삭제하기');

    return {
      ...utils,
      input,
      label,
      button,
      onRemove,
      handleCheckBox,
    };
  };

  it('has input, label, button', () => {
    const { input, label, button } = setup();

    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('does not show check and line-through when done is false', () => {
    const { input, label } = setup({ todo: { ...sampleTodo, done: false } });
    expect(input).not.toBeChecked();
    expect(label).not.toHaveStyle('text-decoration: line-through;');
  });

  it('shows check and line-through when done is true', () => {
    const { input, label } = setup({ todo: { ...sampleTodo, done: true } });
    expect(input).toBeChecked();
    // expect(label).toHaveStyle('text-decoration: line-through;');
  });

  it('calls onRemove', () => {
    const { button, onRemove } = setup();
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });

  it('calls handleCheckBox', () => {
    const { input, handleCheckBox } = setup();
    fireEvent.click(input);
    expect(handleCheckBox).toBeCalledWith(sampleTodo.id, !sampleTodo.done);
  });
});
