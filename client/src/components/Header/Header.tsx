import React from 'react';
import cn from 'classnames';
import styles from './Header.module.css';
import { IClassNameProps } from '../../constants/interfaces/IClassNameProps';

export interface IHeaderProps extends IClassNameProps {}

export const Header = (props: IHeaderProps) => {
    const {className} = props;

    return (
        <div className={cn(styles.header, className)}>
            <h1>home24</h1>
            <input placeholder={'Search'} />
        </div>
    )
};
