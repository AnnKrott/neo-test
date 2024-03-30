import { classNames } from '../../Libs/classNames';
import { Logo } from '../../Logo/Logo';
import { Tg } from '../../assets/images/Tg';
import { Vk } from '../../assets/images/Vk';
import { Whatsapp } from '../../assets/images/Whatsapp';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { List, ListFlex } from '../List/List';
import { Nav } from '../Nav/Nav';
import classes from './Footer.module.scss'

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(classes.Footer, {}, [''])}>

            <Logo />
            <List flex={ListFlex.COLUMN} list={['Избранное', 'Корзина', 'Контакты']} />

            <div>
                <p>Условия сервиса</p>
                <LangSwitcher />
            </div>

            <List flex={ListFlex.ROW} list={[<Vk />, <Tg />, <Whatsapp />]} className={classes.socials} />

        </div>
    )
};


