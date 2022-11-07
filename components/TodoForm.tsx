import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

interface TodoFormProps {
  onInsert: (value: string) => void;
}

export const TodoForm = ({ onInsert }: TodoFormProps) => {
  const [value, setValue] = useState('');

  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [],
  );

  const onSubmitTodo = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      onInsert(value);
      e.preventDefault();
      setValue('');
    },
    [value],
  );

  return (
    <form onSubmit={onSubmitTodo}>
      <input placeholder="할 일을 입력하세요" onChange={handleInput} value={value} />
      <button type="submit">등록하기</button>
    </form>
  );
};
