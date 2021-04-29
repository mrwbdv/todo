import { AnyAction } from 'redux';
import { TItems, ITEM_ADDED_SUCCESS, ITEM_COMPLETED_SUCCESS, ITEM_DELETED_SUCCESS } from '../types';

const initialState: TItems = {
  items: [],
};

export const todos = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ITEM_ADDED_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case ITEM_COMPLETED_SUCCESS:
      const idx = state.items.findIndex((item) => item.id === action.id);
      const oldItem = state.items[idx];
      const newItem = {
        ...oldItem,
        completed: !oldItem.completed,
        completedAt: oldItem.completed ? '' : new Date().toDateString(),
      };
      console.log(newItem);
      return {
        ...state,
        items: [...state.items.slice(0, idx), newItem, ...state.items.slice(idx + 1)],
      };
    case ITEM_DELETED_SUCCESS:
      const index = state.items.findIndex((item) => item.id === action.id);
      return {
        ...state,
        items: [...state.items.slice(0, index), ...state.items.slice(index + 1)],
      };
    default:
      return state;
  }
};
