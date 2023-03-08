import { tw } from "typewind";
import DndPage from "./pages/dnd";

export default function App() {
  return (
    <div
      className={tw.flex.flex_col.items_center.pt_[
        "30vh"
      ].bg_white.text_black.dark(tw.bg_black.text_white)}
    >
      <DndPage />
    </div>
  );
}
