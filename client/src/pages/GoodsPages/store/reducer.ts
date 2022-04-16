import { IState } from './provider';
import { Actions } from './actions';
import { UPDATE_DATA_ACTION_TYPE } from './actions/updateData';

export const stateReducer = (state: IState, action: Actions) => {
    switch (action.type) {
        case UPDATE_DATA_ACTION_TYPE:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}
