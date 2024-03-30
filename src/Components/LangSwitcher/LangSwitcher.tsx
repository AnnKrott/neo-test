import { classNames } from '../../Libs/classNames';
import { Globe } from '../../assets/images/Globe';
import { Button, ButtonTheme } from '../Button/Button';
import classes from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    return (
        <div className={classNames(classes.LangSwitcher, {}, [''])}>
            <Globe />
            <Button theme={ButtonTheme.BASE_SM}>Рус</Button>
            <Button theme={ButtonTheme.BASE_SM}>Eng</Button>
        </div>
    )
};


