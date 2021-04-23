import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addItem } from '../../redux/actions';
import { Button, Form, Grid } from 'semantic-ui-react';

export const ItemAddForm = () => {
  //state
  const [newItem, setNewItem] = useState({
    id: '',
    label: '',
    important: false,
    done: false,
  });

  //dispatch
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addItem({ ...newItem, id: uuid() }));
    setNewItem({ id: '', label: '', important: false, done: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid stretched stackable>
          <Grid.Row>
            <Grid.Column tablet={13} computer={13}>
              <Form.Input
                fluid
                name='label'
                placeholder='add item'
                value={newItem.label}
                onChange={handleChange}
              />
            </Grid.Column>
            <Grid.Column tablet={3} computer={3}>
              <Button type='submit' primary fluid>
                Add
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </>
  );
};
