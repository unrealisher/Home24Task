import React, { PropsWithChildren, useReducer } from 'react';
import { stateReducer } from './reducer';
import { StateContext } from './context';
import { ICategory } from '../../../entities/category';

export interface IState {
    categories: ICategory[],
}

export const initialState: IState = {
    categories: [],
}

export const StoreProvider = ({children}: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )
}
