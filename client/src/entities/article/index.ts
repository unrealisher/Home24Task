import { IPrices } from '../prices';
import { IImage } from '../image';

export interface IArticle {
    name:  string;
    variantName: string;
    prices: IPrices;
    images: IImage[];
}
