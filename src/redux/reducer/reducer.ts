import { AnyAction } from 'redux';
import { TItems, ITEM_ADDED_SUCCESS } from '../types';

const initialState: TItems = {
  items: [],
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ITEM_ADDED_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    default:
      return state;
  }
};
