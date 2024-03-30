import { classNames } from '../../Libs/classNames';
import classes from './Cart.module.scss'

interface CartProps {
    className?: string;
}

export const Cart = ({ }: CartProps) => {
    return (
        <div className={classNames(classes.Cart, {}, [])}>
            Cart
        </div>
    )
};


