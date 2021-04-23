import { createSelector } from 'reselect';
import { RootStateOrAny } from 'react-redux';

export const getItemsSelector = createSelector(
  (state: RootStateOrAny) => state.items,
  (getItemsSelector) => getItemsSelector,
);
