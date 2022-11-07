import { TodoList } from '@/components/TodoList';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<TodoList/>', () => {
  const sampleTodos = [
    {
      id: 1,
      text: 'TODO-TDD',
      done: true,
    },
    {
      id: 2,
      text: 'Velog 작성하기',
      done: true,
    },
  ];

  const setup = () => {
    const onRemove = jest.fn();
    const handleCheckBox = jest.fn();
    const utils = render(
      <TodoList todos={sampleTodos} onRemove={onRemove} handleCheckBox={handleCheckBox} />,
    );

    return { ...utils, onRemove };
  };

  it('renders todos properly', () => {
    setup();
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });

  it('calls onRemove', () => {
    const { onRemove } = setup();
    fireEvent.click(screen.getAllByText('삭제하기')[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
