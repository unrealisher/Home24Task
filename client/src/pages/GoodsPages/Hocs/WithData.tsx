import React, { useContext, useEffect } from 'react';
import { StateContext } from '../store';
import { updateData } from '../store/actions';
import { axios } from '../../../helpers/axios';
import { ICategory } from '../../../entities/category';

type Response = {
    data: {
        categories: ICategory[];
    };
}

const MAX_RETRIES_COUNT = 3;

export function WithData<T>(Component: React.ComponentType<T>) {
    return function WrappedComponent(props: T) {
        const [, dispatch] = useContext(StateContext);

        useEffect(() => {
            axios<Response>(
                {
                    method: 'POST',
                    url: '/graphql',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: JSON.stringify({
                        query: `{
                        categories(ids: "156126", locale: de_DE) {
                          name
                          articleCount
                          childrenCategories {
                            name
                            urlPath
                          }
                          categoryArticles(first: 50) {
                            articles {
                              name
                              variantName
                              prices {
                                currency
                                regular {
                                  value
                                }
                              }
                              images(
                                format: WEBP
                                maxWidth: 200
                                maxHeight: 200
                                limit: 1
                              ) {
                                path
                              }
                            }
                          }
                        }
                      }`,
                    })
                },
                MAX_RETRIES_COUNT
            ).then(result => {
                dispatch(updateData(result.data.data));
            })
        }, [dispatch])

        return <Component {...props} />;
    }
}
