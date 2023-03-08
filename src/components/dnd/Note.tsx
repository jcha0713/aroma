import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useRef } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { tw } from "typewind";

export interface INote {
  id: number;
  todo: string;
  isDone: boolean;
}

const Note: React.FC<{
  index: number;
  todo: INote;
  todos: INote[];
  setTodos: Dispatch<SetStateAction<INote[]>>;
}> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={
            tw.w_60.max_w_["15rem"].max_h_fit.min_h_["104px"].bg_green_400
              .border
          }
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              ref={inputRef}
            />
          ) : (
            <span>{todo.todo}</span>
          )}
        </form>
      )}
    </Draggable>
  );
};

export default Note;
