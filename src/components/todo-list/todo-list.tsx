import { TodoListItem } from '../todo-list-item/todo-list-item';

import { TItem } from '../../redux/types';

export const TodoList: React.FC<any> = ({ todos }) => {
  return (
    <div>
      {todos?.map((item: TItem) => {
        const { id, label } = item;
        return (
          <div key={id}>
            <TodoListItem id={id} label={label} />
          </div>
        );
      })}
    </div>
  );
};
