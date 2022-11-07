import { TodoItemProps } from '@/types/TodoItemProps';
import React, { useCallback } from 'react';

import styled from 'styled-components';

interface LabelProps {
  checked: boolean;
}

export const TodoItem = ({ todo, onRemove, handleCheckBox }: TodoItemProps) => {
  const { id, text, done } = todo;

  const handleRemove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <input type="checkbox" id={text} checked={done} onChange={() => handleCheckBox(id, !done)} />
      <Label htmlFor={text} checked={done}>
        {text}
      </Label>
      <button type="button" onClick={handleRemove}>
        삭제하기
      </button>
    </li>
  );
};

const Label = styled.label<LabelProps>`
  ${({ checked }) => checked && 'text-decoration: line-through;'}
`;
