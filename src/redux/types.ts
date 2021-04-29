export const ITEM_ADDED_SUCCESS = 'ITEM_ADDED_SUCCESS';
export const ITEM_COMPLETED_SUCCESS = 'ITEM_COMPLETED_SUCCESS';
export const ITEM_DELETED_SUCCESS = 'ITEM_DELETED_SUCCESS';

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
  | { type: 'ITEM_DELETED_SUCCESS'; id: string };
