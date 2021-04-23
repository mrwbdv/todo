import { ITEM_ADDED_SUCCESS, TItem, TAction } from './../types';

export const addItem = (item: TItem): TAction => ({ type: ITEM_ADDED_SUCCESS, item });
