import { classNames } from '../../Libs/classNames';
import { Logo } from '../Logo/Logo';
import { CartImage } from '../../assets/images/CartImage';
import { Heart } from '../../assets/images/Heart';
import { useItems } from '../../context/CartContextProvider';
import { Counter } from '../Counter/Counter';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';


interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const { totalCount } = useItems()

    return (
        <div className={classNames(classes.Header, {}, [''])}>

            <Logo />

            <div className={classes.icons}>
                <Link to='/'>
                    <Heart />
                    <Counter totalCount={0} />
                </Link>

                <Link to='/cart'>
                    <CartImage />
                    <Counter totalCount={totalCount} />
                </Link>
            </div>

        </div>
    )
};


