export default function Header({ products }) {
  const totalItems = products.reduce((total, product) => {
    return (total += product.quantity);
  }, 0);
  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{totalItems} items in the bag</span>
    </header>
  );
}
