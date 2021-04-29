import { createSelector } from 'reselect';
import { RootStateOrAny } from 'react-redux';

import { ITEM_VISIBILITY_FILTERS, TItem } from '../types';

export const getFilterSelector = createSelector(
  (state: RootStateOrAny) => state.visibilityFilter,
  (getItemsSelector) => getItemsSelector,
);

const getVisibilityFilter = (state: RootStateOrAny) => state.visibilityFilter;
const getTodos = (state: RootStateOrAny) => state.todos.items;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, items) => {
    switch (visibilityFilter) {
      case ITEM_VISIBILITY_FILTERS.COMPLETED:
        return items.filter((todo: TItem) => todo.completed);
      case ITEM_VISIBILITY_FILTERS.ACTIVE:
        return items.filter((todo: TItem) => !todo.completed);
      case ITEM_VISIBILITY_FILTERS.ALL:
      default:
        return items;
    }
  },
);
