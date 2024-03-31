import { classNames } from '../../Libs/classNames';
import classes from './List.module.scss'

export enum ListFlex {
    ROW = 'row',
    COLUMN = 'column'
}

interface ListProps {
    className?: string;
    list: any[];
    flex: string
}

export const List = ({ list, flex = ListFlex.COLUMN, className }: ListProps) => {
    return (
        <ul className={classNames(classes.List, {}, [classes[flex], className as string])}>
            {list.map((item) => {
                return (
                    <li key={item.id} > {item}</li>
                )
            })}
        </ul >
    )
};


