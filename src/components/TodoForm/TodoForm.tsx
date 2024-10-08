import React, { useState } from 'react';

interface Props {
  title: string;
  titleForm: React.RefObject<HTMLInputElement>;
  onSubmit: (value: string) => void;
}

export const TodoForm: React.FC<Props> = ({ title, titleForm, onSubmit }) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(newTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-cy="TodoTitleField"
        type="text"
        className="todo__title-field"
        placeholder="Empty todo will be deleted"
        ref={titleForm}
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
        onBlur={() => onSubmit(newTitle)}
      />
    </form>
  );
};
