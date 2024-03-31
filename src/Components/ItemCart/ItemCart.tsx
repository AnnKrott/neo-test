import { classNames } from '../../Libs/classNames';
import { numberFormat } from '../../Libs/numberFormat';
import { Basket } from '../../assets/images/Basket';
import { CartItemType } from '../../context/CartContextProvider';
import { Button } from '../Button/Button';
import classes from './ItemCart.module.scss';

interface ItemCartProps {
    className?: string;
    item: CartItemType;
    onRemove: (item: CartItemType) => void;
    onAdd: (item: CartItemType) => void;
}


export const ItemCart = ({ item, onRemove, onAdd }: ItemCartProps) => {

    return (
        <div className={classNames(classes.ItemCart, {}, [''])}>

            <div className={classes.descr} >

                <div className={classes.item}>
                    <img className={classes.img} src={require(`../../${item.img}`)} alt="" />
                    <div>
                        <div className={classes.title}>{item.title}</div>
                        <div className={classes.price}>{numberFormat(item.price)} ₽</div>
                    </div>
                </div>

                <Button onClick={() => onRemove(item)}><Basket /></Button>
            </div>


            <div className={classes.descr} >

                <div className={classes.quantifier}>
                    <Button onClick={() => onRemove(item)}> <span>&#8722;</span></Button>
                    {item.amount}
                    <Button onClick={() => onAdd(item)}><span>&#43;</span></Button>
                </div>

                <div className={classes.itemPrice}>
                    {numberFormat(item.price * item.amount)} ₽
                </div>

            </div>


        </div >
    )
};


