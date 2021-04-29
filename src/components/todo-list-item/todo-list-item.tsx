import { useDispatch } from 'react-redux';
import { completeItem, deleteItem } from '../../redux/actions';

import { Icon, Grid } from 'semantic-ui-react';

interface IProps {
  id: string;
  label: string;
}
export const TodoListItem: React.FC<IProps> = ({ id, label }) => {
  const dispatch = useDispatch();

  const handleComplete = (id: string) => {
    dispatch(completeItem(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteItem(id));
  };
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <span onClick={() => handleComplete(id)} className='dividing'>
            {label}
          </span>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <div onClick={() => handleDelete(id)}>
            <Icon name='trash' />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
