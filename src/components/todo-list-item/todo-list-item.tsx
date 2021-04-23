import { Checkbox } from 'semantic-ui-react';
import { TItem } from '../../redux/types';

export const TodoListItem = (props: TItem) => {
  const { label } = props;
  return <Checkbox label={label} />;
};
