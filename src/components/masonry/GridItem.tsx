import { tw } from "typewind";
import { GridItemDataType } from "./Masonry";

type Props = {
  data: GridItemDataType;
};

const GridItem = (props: Props) => {
  const { data } = props;
  return (
    <div
      className={tw.flex.flex_col.items_center.justify_center.bg_white.text_black.border.border_aromaGray_200.rounded_lg.divide_y.divide_aromaGray_200.dark(
        tw.bg_black.text_white
      )}
    >
      <h2>{data.title}</h2>
      <p>{data.contents}</p>
    </div>
  );
};

export default GridItem;
