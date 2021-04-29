export const ITEM_ADDED_SUCCESS = 'ITEM_ADDED_SUCCESS';
export const ITEM_COMPLETED_SUCCESS = 'ITEM_COMPLETED_SUCCESS';
export const ITEM_DELETED_SUCCESS = 'ITEM_DELETED_SUCCESS';

export const FILTER_SETTED_SUCCESS = 'FILTER_SETTED_SUCCESS';

export interface IFiltered {
  [key: string]: string;
}
export const ITEM_VISIBILITY_FILTERS: IFiltered = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
};

export type TItem = {
  id: string;
  label: string;
  createdAt: string;
  completedAt: string;
  completed: boolean;
  important: boolean;
};

export type TItems = {
  items: TItem[];
};

export type TAction =
  | { type: 'ITEM_ADDED_SUCCESS'; item: TItem }
  | { type: 'ITEM_COMPLETED_SUCCESS'; id: string }
  | { type: 'ITEM_DELETED_SUCCESS'; id: string }
  | { type: 'FILTER_SETTED_SUCCESS'; filter: string };
