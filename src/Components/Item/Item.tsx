import { classNames } from '../../Libs/classNames';
import { numberFormat } from '../../Libs/numberFormat';
import { Star } from '../../assets/images/Star';
import { ItemType } from '../../db';
import { Button, ButtonTheme } from '../Button/Button';
import classes from './Item.module.scss';

interface ItemProps {
    className?: string;
    item: ItemType;
}

export const Item = ({ item }: ItemProps) => {
    // const path = `../../${item.img}`
    return (
        <div className={classNames(classes.Item, {}, [''])}>
            <img className={classes.img} src={require(`../../${item.img}`)} alt="" />

            <div className={classes.descr} >
                <span className={classes.title}>{item.title}</span>
                <span className={classes.price}>{numberFormat(item.price)} ₽</span>
            </div>

            <div className={classes.descr}>
                <div className={classes.rate}>
                    <Star />
                    <span className={classes.star}>{item.rate}</span>
                </div>
                <Button theme={ButtonTheme.BASE}>Купить</Button>
            </div>


        </div >
    )
};


