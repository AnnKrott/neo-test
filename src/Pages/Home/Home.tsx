import { Category } from '../../Components/Category/Category';
import { classNames } from '../../Libs/classNames';
import { items } from '../../db';
import classes from './Home.module.scss'

interface HomeProps {
    className?: string;
}

export const Home = ({ }: HomeProps) => {
    return (
        <div className={classNames(classes.Home, {}, [])}>
            <Category itemsList={items} catName='Наушники' />
            <Category itemsList={items} catName='Беспроводные наушники' />
        </div>
    )
};


