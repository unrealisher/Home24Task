import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { IClassNameProps } from '../../constants/interfaces/IClassNameProps';
import { StateContext } from '../../pages/GoodsPages/store';

export interface ISidebarProps extends IClassNameProps {}

export const Sidebar = (props: ISidebarProps) => {
    const [state] = useContext(StateContext);
    const {className} = props;
    const {categories} = state;

    return (
        <div className={cn(styles.sidebar, className)}>
            <h2 className={styles.title}>Kategorien</h2>
            {categories.length ? (
                <ul className={styles.list}>
                    {categories[0].childrenCategories.map(({ name, urlPath }) => {
                        return (
                            <li key={name}>
                                <Link to={`/${urlPath}`}>{name}</Link>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                'Loading...'
            )}
        </div>
    );
};
