import { useState, type JSX } from "react";

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }: { products: Product[] }) {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  onFilterTextChange,
  inStockOnly,
  onInStockOnlyChange,
}: {
  filterText: string;
  onFilterTextChange: (filterText: string) => void;
  inStockOnly: boolean;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(event) => {
          onFilterTextChange(event.target.value);
        }}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(event) => {
            onInStockOnlyChange(event.target.checked);
          }}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesFilterText = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesStock = !inStockOnly || product.stocked;

    return matchesFilterText && matchesStock;
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
