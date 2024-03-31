import classes from './Logo.module.scss';
import { Link } from 'react-router-dom'

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <Link className={classes.logo} to='/'>
            QPICK
        </Link>
    )
};


