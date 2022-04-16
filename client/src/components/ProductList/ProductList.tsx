import React, { useContext, useMemo } from 'react';
import cn from 'classnames';
import { ProductCard } from '../ProductCard/ProductCard';
import { IClassNameProps } from '../../constants/interfaces/IClassNameProps';
import { StateContext } from '../../pages/GoodsPages/store';
import { IArticle } from '../../entities/article';
import styles from './ProductList.module.css';

export interface IProductListProps extends IClassNameProps {}

export const ProductList = (props: IProductListProps) => {
    const [state] = useContext(StateContext);
    const {className} = props;
    const {categories} = state;

    const articles = useMemo(() => {
        return categories.reduce((result: IArticle[], category) => {
            return [
                ...result,
                ...category.categoryArticles.articles,
            ];
        }, []);
    }, [categories]);

    if (!articles.length) return null;

    return (
        <div
            className={cn(styles.content, className)}
        >
            {categories.length ? (
                <h2>
                    {categories[0].name}
                    <small> ({categories[0].articleCount})</small>
                </h2>
            ) : (
                'Loading...'
            )}
            <div className={styles.list}>
                {articles.map(article =>
                    <ProductCard key={article.name + article.variantName} article={article} />
                )}
            </div>
        </div>
    )
}
