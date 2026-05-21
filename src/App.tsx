import type { FC } from "react";

interface Product {
  title: string;
  isFruit: boolean;
  id: number;
}

const products: Product[] = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const ShoppingList: FC = () => {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

const App: FC = () => {
  return (
    <div>
      <ShoppingList />
    </div>
  );
};

export default App;
