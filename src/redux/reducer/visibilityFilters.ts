import { AnyAction } from 'redux';
import { FILTER_SETTED_SUCCESS, ITEM_VISIBILITY_FILTERS } from '../types';

const initialState: string = ITEM_VISIBILITY_FILTERS.ALL;

export const visibilityFilter = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FILTER_SETTED_SUCCESS:
      return action.filter;
    default:
      return state;
  }
};
