import {
  ITEM_ADDED_SUCCESS,
  ITEM_COMPLETED_SUCCESS,
  ITEM_DELETED_SUCCESS,
  FILTER_SETTED_SUCCESS,
  TItem,
  TAction,
} from './../types';

export const addItem = (item: TItem): TAction => ({ type: ITEM_ADDED_SUCCESS, item });

export const completeItem = (id: string): TAction => ({ type: ITEM_COMPLETED_SUCCESS, id });

export const deleteItem = (id: string): TAction => ({ type: ITEM_DELETED_SUCCESS, id });

export const setFilter = (filter: string): TAction => ({ type: FILTER_SETTED_SUCCESS, filter });
