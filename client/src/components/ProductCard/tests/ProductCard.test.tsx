import React from 'react';
import { ProductCard } from '../ProductCard';
import renderer from 'react-test-renderer';

const article = {
    name: "Polsterstuhl Aledas II",
    variantName: "Webstoff Cors: Mintgrau - 4er Set",
    prices: {
        currency: "EUR",
        regular: {
            value: 29999
        }
    },
    images: [
        {
            path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000282500-210826-06123400004-IMAGE-P000000001000282500.webp"
        }
    ]
}

test('renders the ProductCard', () => {
    const tree = renderer.create(
        <ProductCard article={article} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
