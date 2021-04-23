export const ITEM_ADDED_SUCCESS = 'ITEM_ADDED_SUCCESS';

export type TItem = {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
};

export type TItems = {
  items: TItem[];
};

export type TAction = { type: 'ITEM_ADDED_SUCCESS'; item: TItem };
