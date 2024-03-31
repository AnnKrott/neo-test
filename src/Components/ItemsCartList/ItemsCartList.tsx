import { classNames } from '../../Libs/classNames';
import { CartItemType } from '../../context/CartContextProvider';
import { ItemCart } from '../ItemCart/ItemCart';
import classes from './ItemsCartList.module.scss'

interface ItemsCartListProps {
    className?: string;
    itemsList: CartItemType[];
    onRemove: (item: CartItemType) => void;
    onAdd: (item: CartItemType) => void;
}

export const ItemsCartList = ({ itemsList, onRemove, onAdd }: ItemsCartListProps) => {
    return (
        <div>
            <h3 className={classes.titleCart}>Корзина</h3>

            <div className={classNames(classes.ItemsCartList, {}, [''])}>
                {
                    itemsList.map((item) => {

                        return <ItemCart onAdd={onAdd} onRemove={onRemove} item={item} key={item.id} />

                    })
                }
            </div >
        </div>
    )
};


