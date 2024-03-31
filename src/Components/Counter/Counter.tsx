import classes from './Counter.module.scss'

interface CounterProps {
    className?: string;
    totalCount: number;
}

export const Counter = ({ className, totalCount }: CounterProps) => {

    return (
        <div className={classes.Counter}>{totalCount}</div>
    )
};


