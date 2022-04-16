import React from 'react';
import cn from 'classnames';
import styles from './Footer.module.css';
import { IClassNameProps } from '../../constants/interfaces/IClassNameProps';

export interface IFooterProps extends IClassNameProps {}

export const Footer = (props: IFooterProps) => {
    const {className} = props;

    return (
        <div className={cn(styles.footer, className)}>
            Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
        </div>
    )
};
