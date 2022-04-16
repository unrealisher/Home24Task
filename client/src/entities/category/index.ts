import { ICategoryArticle } from '../categoryArticle';
import { IChildCategory } from '../childCategory';

export interface ICategory {
    name: string;
    categoryArticles: ICategoryArticle;
    articleCount: number;
    childrenCategories: IChildCategory[];
}
