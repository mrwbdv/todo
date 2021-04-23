import { TodoListItem } from '../todo-list-item/todo-list-item';
import { useSelector } from 'react-redux';

import { TItem } from '../../redux/types';

import { getItemsSelector } from '../../redux/selectors';
export const TodoList = () => {
  const items = useSelector(getItemsSelector);
  return (
    <div>
      {items.length
        ? items.map((item: TItem) => (
            <div key={item.id}>
              <TodoListItem {...item} />
            </div>
          ))
        : null}
    </div>
  );
};
