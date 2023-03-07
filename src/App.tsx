import { tw } from "typewind";
import DndPage from "./pages/dnd";

export default function App() {
  return (
    <div
      className={tw.flex.flex_col.items_center.justify_center.h_screen.bg_white.text_black.dark(
        tw.bg_black.text_white
      )}
    >
      <h1 className={tw.text_xl.sm(tw.text_3xl).md(tw.text_4xl).font_bold}>
        Hello World
      </h1>
      <DndPage />
    </div>
  );
}
