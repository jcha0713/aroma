import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import { tw } from "typewind";
import GridItem from "./GridItem";

export type GridItemDataType = {
  id: number;
  title: string;
  contents: string;
};

const initialData: GridItemDataType[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    contents:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 2,
    title: "dolor sit amet",
    contents: " consectetur adipiscing elit. Etiam ",
  },
  {
    id: 3,
    title: "sed tempor enim, quis tincidunt risus",
    contents: "Nunc vehicula consequat odio et malesuada",
  },
  {
    id: 4,
    title: "Maecenas tempor, velit gravida",
    contents: "dignissim interdum, sapien tellus pretium diam",
  },
  {
    id: 5,
    title: "sit amet mollis turpis nibh ut lectus",
    contents: "Suspendisse tincidunt sapien quis odio consectetur",
  },
  {
    id: 6,
    title: "A rutrum dui accumsan",
    contents: "mollis vulputate magna porttitor quis.",
  },
  {
    id: 7,
    title: "Sed convallis turpis tortor",
    contents: "semper orci eu facilisis",
  },
  {
    id: 8,
    title: "Pellentesque nibh neque",
    contents: " pharetra vitae nisi vitae, laoreet egestas nisi.",
  },
  {
    id: 9,
    title: "Nullam quis auctor nisl",
    contents:
      "In semper risus nunc, a dignissim neque laoreet eu. Nulla hendrerit orci no",
  },
];

const ResponsiveGridLayout = WidthProvider(Responsive);

const Masonry = () => {
  return (
    <ResponsiveGridLayout
      className={`layout ${tw.flex.items_center.justify_center.bg_white.text_black.dark(
        tw.bg_black.text_white
      )}`}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 3, md: 3, sm: 3, xs: 2, xxs: 2 }}
    >
      {initialData.map((data) => (
        <GridItem key={data.id} data={data} />
      ))}
    </ResponsiveGridLayout>
  );
};

export default Masonry;
