import { combineReducers } from 'redux';

import { visibilityFilter } from './visibilityFilters';
import { todos } from './todos';

export const reducer = combineReducers({
  visibilityFilter,
  todos,
});
