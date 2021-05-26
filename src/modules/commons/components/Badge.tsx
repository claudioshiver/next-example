import classNames from 'classnames';
import React, {useMemo} from "react";

export enum BadgeType {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning'
}

export interface BadgeProps {
    variant: BadgeType
}

const Badge: React.FC<BadgeProps> = function({ variant, children }) {

    const classes = useMemo(() => {
        return classNames('text-white py-1 px-2 rounded', {
            'bg-green-500': variant === BadgeType.SUCCESS,
            'bg-yellow-500': variant === BadgeType.WARNING,
            'bg-red-500': variant === BadgeType.ERROR,
            'border-emerald-800': variant === BadgeType.SUCCESS,
            'border-amber-800': variant === BadgeType.WARNING,
            'border-red-800': variant === BadgeType.ERROR,
        });
    }, [variant]);

    return (
        <span className={classes}>
            {children}
        </span>
    )
};

export default Badge;
