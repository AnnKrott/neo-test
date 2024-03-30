import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '../../Libs/classNames';
import classes from './Button.module.scss'

export enum ButtonTheme {
    BASE = 'base',
    INVERTED = 'base-inverted',
    BASE_SM = 'base-sm'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.BASE,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={
                classNames(classes.Button, {}, [classes[theme]])
            }
            {...otherProps}
        >
            {children}
        </button >
    )
})


