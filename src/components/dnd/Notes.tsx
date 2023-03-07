import React, { Dispatch, SetStateAction } from "react";
import Note, { INote } from "./Note";
import { Droppable } from "@hello-pangea/dnd";
import { tw } from "typewind";

interface props {
  todos: INote[];
  setTodos: Dispatch<SetStateAction<INote[]>>;
  setCompletedTodos: Dispatch<SetStateAction<INote[]>>;
  CompletedTodos: INote[];
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div>
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <span>Column 1</span>
            {todos?.map((todo, index) => (
              <Note
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <span>Column 2</span>
            {CompletedTodos?.map((todo, index) => (
              <Note
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
