import { ReactNode, createContext, useContext, useState } from "react";
import { ItemType } from "../db";
import { useEffect } from 'react'
import { lstat } from "fs";

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    totalCount: 0,
    addToCart: () => { },
    removeFromCart: () => { },
    getCartTotal: () => 0,
})

interface CartContextProviderProps {
    children: ReactNode
}

export interface CartItemType {
    id: any;
    img: string;
    title: string;
    price: number;
    rate: number;
    amount: number
}

interface CartContextType {
    cartItems: CartItemType[];
    totalCount: number;
    addToCart: (item: any) => void;
    removeFromCart: (item: CartItemType) => void;
    getCartTotal: () => number;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [totalCount, setTotalCount] = useState(
        localStorage.getItem('totalCount')
            ?
            JSON.parse(localStorage.getItem('totalCount') as string)
            :
            0
    )

    const [cartItems, setCartItems] = useState<CartItemType[]>(
        localStorage.getItem('cartItems')
            ?
            JSON.parse(localStorage.getItem('cartItems') as string)
            :
            []
    )


    const addToCart = (item: any) => {
        const isInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, amount: cartItem.amount + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, amount: 1 }]);
        }
        console.log(cartItems);
        setTotalCount(totalCount + 1)
    };

    const removeFromCart = (item: CartItemType) => {
        const isInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isInCart && isInCart.amount === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, amount: cartItem.amount - 1 }
                        : cartItem
                )
            );
        }
        console.log(cartItems);
        setTotalCount(totalCount - 1)
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.amount, 0);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalCount', JSON.stringify(totalCount))
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
        const totalCount = localStorage.getItem('totalCount');
        if (totalCount) {
            setTotalCount(JSON.parse(totalCount))
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                totalCount,
                addToCart,
                removeFromCart,
                getCartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
export const useItems = () => useContext(CartContext)