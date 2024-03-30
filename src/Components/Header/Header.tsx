import { classNames } from '../../Libs/classNames';
import { Logo } from '../../Logo/Logo';
import { CartImage } from '../../assets/images/CartImage';
import { Heart } from '../../assets/images/Heart';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';


interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(classes.Header, {}, [''])}>

            <Logo />

            <div className={classes.icons}>
                <Link to='/fav'>
                    <Heart />
                </Link>

                <Link to='/cart'>
                    <CartImage />
                </Link>
            </div>


        </div>
    )
};


