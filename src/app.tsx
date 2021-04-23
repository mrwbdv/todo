import { AppHeader, ItemAddForm, TodoList, ItemStatusFilter } from './components';

import { Container, Divider } from 'semantic-ui-react';

export const App = () => {
  return (
    <Container text>
      <AppHeader />
      <ItemStatusFilter />
      <Divider hidden />
      <ItemAddForm />
      <Divider hidden />
      <TodoList />
    </Container>
  );
};
