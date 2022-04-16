import React, {useMemo} from 'react';
import { formatter } from '../../helpers/formatter';
import { IArticle } from '../../entities/article';
import styles from './ProductCard.module.css';

export interface IProductCardProps {
    article: IArticle;
}

export const ProductCard =  (props: IProductCardProps) => {
    const {article} = props;

    const price = useMemo(
        () => formatter.format(article.prices.regular.value / 100),
        [article]
    );

    return (
        <div className={styles.productCard}>
            {/*Pictures are empty, so i use others*/}
            <img src={`https://via.placeholder.com/200.png?text=${article.name}`} alt={`${article.name}`}/>
            <div>{article.name}</div>
            <div>{price}</div>
            <button className={styles.button}>Add to cart</button>
        </div>
    );
}
