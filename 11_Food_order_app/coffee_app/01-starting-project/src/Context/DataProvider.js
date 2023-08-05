import React, { useReducer } from "react";
import DataContext from "./data-context";


const defaultDataState = {
  items: [],
  totalAmount: 0
};

const dataReducer = (state, action) => {
  if (action.type==='ADD_DATA') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item)
    };

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'REMOVE_DATA') {

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems
    if (existingItem.amount === 1 ) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount-1}
      updatedItems=[...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }



  return defaultDataState
}

const DataProvider = (props) => {

  const [dataState, dispatchDataAction] = useReducer(dataReducer, defaultDataState)

  const addItemToCartHandler = (item) => {
    dispatchDataAction({
      type: 'ADD_DATA',
      item: item
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchDataAction({
      type: 'REMOVE_DATA',
      id: id
    })

  };

  const dataContext = {
    items: dataState.items,
    totalAmount: dataState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  )
};

export default DataProvider
