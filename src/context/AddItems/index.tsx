import React from "react";
import { createContext, useReducer } from "react";
import {IAddItemsContext, IAddItemsProvider} from "./index"

export const AddItemsContext = createContext({} as IAddItemsContext)

export function AddItemsProvider({children}: IAddItemsProvider){
    const add = (addItems, setAddItems) => {
        switch (setAddItems.type) {
            case "ADD":
              const tempstate = addItems.filter((item) => setAddItems.payload.id === item.id);
              if (tempstate.length > 0) {
                return addItems;
              } else {
                return [...addItems, setAddItems.payload];
              }
            case "INCREASE":
              const tempstate1 = addItems.map((item) => {
                if (item.id === setAddItems.payload.id) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  return item;
                }
              });
              return tempstate1;
            case "DECREASE":
              const tempstate2 = addItems.map((item) => {
                if (item.id === setAddItems.payload.id) {
                  return { ...item, quantity: item.quantity - 1 };
                } else {
                  return item;
                }
              })
              return tempstate2;
              case "REMOVE":
                const tempstate3 = addItems.filter(
                  (item) => item.id !== setAddItems.payload.id
                );
        
                return tempstate3;
        
              default:
                return addItems;
            }
          };
    const [addItems, dispatch] = useReducer(add, []);
    const info = { addItems, dispatch };
    return(
        <AddItemsContext.Provider value={{
            addItems,
        }}>
            {children}
        </AddItemsContext.Provider>
    )
}
