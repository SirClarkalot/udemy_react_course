import { Link } from "react-router-dom"

function Products() {
  const PRODUCTS = [
    { id: 'p1', title: 'product 1' },
    { id: 'p2', title: 'product 2' },
    { id: 'p3', title: 'product 3' }
  ]

  return (
    <>
      <h1> Products</h1>
      <ul>
        {PRODUCTS.map(prod => <li key={prod.id}>
          <Link to={prod.id}>{prod.title}</Link>
          </li>)}
        {/* <li><Link to="products/product-1">Product 1</Link></li>
        <li><Link to="products/product-2">Product 2</Link></li>
        <li><Link to="products/product-3">Product 3</Link></li> */}
      </ul>
    </>
  )
}

export default Products
