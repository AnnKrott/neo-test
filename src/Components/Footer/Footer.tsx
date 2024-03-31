import { Link } from 'react-router-dom';
import { classNames } from '../../Libs/classNames';
import { Tg } from '../../assets/images/Tg';
import { Vk } from '../../assets/images/Vk';
import { Whatsapp } from '../../assets/images/Whatsapp';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { List, ListFlex } from '../List/List';
import classes from './Footer.module.scss'
import { Logo } from '../Logo/Logo';

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(classes.Footer, {}, [''])}>

            <Logo />
            <List flex={ListFlex.COLUMN} list={[
                <Link to='/'>Избранное</Link>,
                <Link to='/cart'>Корзина</Link>,
                <Link to='/'>Контакты</Link>]}
            />

            <div>
                <Link to='/'>Условия сервиса</Link>
                <LangSwitcher />
            </div>

            <List
                flex={ListFlex.ROW}
                list={[
                    <Link to='https://vk.com'><Vk /></Link>,
                    <Link to='https://web.telegram.org/a/'><Tg /></Link>,
                    <Link to='https://whatsapp.com'><Whatsapp /></Link>
                ]}
                className={classes.socials} />

        </div>
    )
};


