import { classNames } from '../../Libs/classNames';
import { CategoryType, ItemType } from '../../db';
import { Item } from '../Item/Item';
import classes from './Category.module.scss'

interface CategoryProps {
    className?: string;
    itemsList: ItemType[];
    catName: CategoryType;
}

export const Category = ({ itemsList, catName }: CategoryProps) => {
    return (
        <>
            <h3 className={classes.title}>{catName}</h3>
            <div className={classNames(classes.Category, {}, [''])}>
                {
                    itemsList.map((item: ItemType) => {
                        if (item.category === catName) {
                            return <Item item={item} key={item.id} />
                        }
                    })
                }

            </div >
        </>
    )
};


