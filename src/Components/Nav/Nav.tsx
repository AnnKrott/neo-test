import { classNames } from '../../Libs/classNames';
import { List, ListFlex } from '../List/List';
import classes from './Nav.module.scss'

interface NavProps {
    className?: string;
    children: React.ReactNode
}

export const Nav = ({ children }: NavProps) => {
    return (
        <div className={classNames(classes.Nav, {}, [''])}>
            {children}
        </div>
    )
};


