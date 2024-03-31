import { ItemsList } from '../../Components/ItemsList/ItemsList';
import { classNames } from '../../Libs/classNames';
import { items } from '../../db';
import classes from './Home.module.scss'
import { useItems } from '../../context/CartContextProvider';

interface HomeProps {
    className?: string;
}


export const Home = ({ }: HomeProps) => {

    const { addToCart } = useItems()

    return (
        <div className={classNames(classes.Home, {}, [])}>
            <ItemsList isCategory onAdd={addToCart} itemsList={items} catName='Наушники' />
            <ItemsList isCategory onAdd={addToCart} itemsList={items} catName='Беспроводные наушники' />
        </div>
    )
}


