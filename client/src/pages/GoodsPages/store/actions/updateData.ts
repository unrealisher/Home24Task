import { ICategory } from '../../../../entities/category';

type UpdateDataActionPayload = {
    categories: ICategory[];
};
type UpdateDataActionType = 'updateData';

export interface IUpdateDataAction {
    type: UpdateDataActionType;
    payload: UpdateDataActionPayload;
}

export const UPDATE_DATA_ACTION_TYPE: UpdateDataActionType = 'updateData';

export const updateData = (payload: UpdateDataActionPayload): IUpdateDataAction => {
    return {
        type: UPDATE_DATA_ACTION_TYPE,
        payload,
    }
}
