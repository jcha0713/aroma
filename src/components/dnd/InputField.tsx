import React, { useRef, Dispatch, SetStateAction, FormEvent } from "react";

interface props {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Take a note..."
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">ENTER</button>
    </form>
  );
};

export default InputField;
