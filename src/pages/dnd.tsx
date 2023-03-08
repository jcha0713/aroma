import React, { useState } from "react";
import InputField from "../components/dnd/InputField";
import Notes from "../components/dnd/Notes";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { INote } from "../components/dnd/Note";
import { tw } from "typewind";

const DndPage: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<INote[]>([]);
  const [CompletedTodos, setCompletedTodos] = useState<INote[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    const active = todos;
    const complete = CompletedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <Notes
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default DndPage;
