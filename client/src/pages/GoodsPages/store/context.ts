import React from 'react';
import { Actions } from './actions';
import { initialState } from './provider';
import { ICategory } from '../../../entities/category';

export interface IState {
    categories: ICategory[];
}

type IContextState = [IState, React.Dispatch<Actions>];

export const StateContext = React.createContext<IContextState>([initialState, () => {}]);
