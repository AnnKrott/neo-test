import { classNames } from '../../Libs/classNames';
import { CategoryType, ItemType, items } from '../../db';
import { Item } from '../Item/Item';
import classes from './ItemsList.module.scss'

interface ItemsListProps {
    className?: string;
    itemsList: ItemType[];
    catName?: CategoryType;
    isCategory?: boolean;
    onAdd: (item: ItemType) => void;
}

export const ItemsList = ({ itemsList, catName, isCategory, onAdd }: ItemsListProps) => {
    return (
        <div>
            <h3 className={classes.title}>{catName}</h3>

            <div className={classNames(classes.ItemsList, {}, [''])}>
                {
                    itemsList.map((item) => {

                        if (item.category === catName) {
                            return <Item onAdd={onAdd} item={item} key={item.id} />
                        }

                    })
                }
            </div >
        </div>
    )
};


