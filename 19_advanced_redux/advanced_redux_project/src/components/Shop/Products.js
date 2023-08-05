import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS = [
    {
      id: 1,
      title: "Colorful Phone Case",
      price: 9.99,
      description: "Add some style to your phone with our colorful phone case. Made from high-quality materials, this case provides protection and style at an affordable price."
    },
    {
      id: 2,
      title: "Wireless Mouse",
      price: 12.99,
      description: "Say goodbye to tangled wires with our wireless mouse. Featuring a compact and ergonomic design, this mouse is perfect for use at home or on the go."
    },
    {
      id: 3,
      title: "Portable Power Bank",
      price: 16.99,
      description: "Never run out of power again with our portable power bank. With a capacity of 10,000 mAh, this power bank can charge your phone multiple times on a single charge."
    },
    {
      id: 4,
      title: "LED Desk Lamp",
      price: 19.99,
      description: "Illuminate your workspace with our LED desk lamp. With adjustable brightness levels and a sleek design, this lamp is perfect for students, professionals, and anyone who needs a little extra light."
    },
  ];


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
