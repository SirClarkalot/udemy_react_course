import { useState } from "react";
import Drinks from "./components/Drinks/Drinks";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import DataProvider from "./Context/DataProvider";

function App() {

  const [openCart, setOpenCart] = useState(false)

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeCartHanlder = () => {
    setOpenCart(false);
  };

  return (
    <DataProvider>
      {openCart && <Cart onCloseCart={closeCartHanlder}/> }
      <Header onOpenCart={openCartHandler}/>
      <main>
        <Drinks />
      </main>
    </DataProvider>
  );
}

export default App;
