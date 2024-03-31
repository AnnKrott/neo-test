import { useEffect } from 'react';
import { CartTotal } from '../../Components/CartTotal/CartTotal';
import { classNames } from '../../Libs/classNames';
import classes from './Cart.module.scss'
import { useItems } from '../../context/CartContextProvider';
import { ItemsCartList } from '../../Components/ItemsCartList/ItemsCartList';

interface CartProps {
    className?: string;
}

export const Cart = ({ }: CartProps) => {

    const { cartItems, removeFromCart, getCartTotal, addToCart } = useItems()

    return (
        <div className={classNames(classes.Cart, {}, [])}>
            <ItemsCartList onAdd={addToCart} onRemove={removeFromCart} itemsList={cartItems} />
            <CartTotal totalPrice={getCartTotal()} />
        </div>
    )
};


