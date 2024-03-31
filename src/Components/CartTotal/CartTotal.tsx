import { classNames } from '../../Libs/classNames';
import { numberFormat } from '../../Libs/numberFormat';
import { Button, ButtonTheme } from '../Button/Button';
import classes from './CartTotal.module.scss'

interface CartTotalProps {
    className?: string;
    totalPrice: number;
}

export const CartTotal = ({ className, totalPrice }: CartTotalProps) => {
    return (
        <div className={classNames(classes.CartTotal, {}, [''])}>
            <div className={classes.descr}>
                <span className={classes.title}>Итого</span>
                <span className={classes.totalPrice}>₽ {numberFormat(totalPrice)}</span>
            </div>
            <Button className={classes.btn} theme={ButtonTheme.INVERTED}>Перейти к оформлению</Button>
        </div>
    )
};


