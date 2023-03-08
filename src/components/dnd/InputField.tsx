import React, { useRef, Dispatch, SetStateAction, FormEvent } from "react";
import { tw } from "typewind";

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
        className={tw.w_96.px_2.py_3.rounded_md.shadow_lg}
      />
      <button
        type="submit"
        className={tw.h_12.ml_4.p_3.border.border_aromaGray_400}
      >
        ENTER
      </button>
    </form>
  );
};

export default InputField;
