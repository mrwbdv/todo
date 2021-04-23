import { Header, Container, Divider } from 'semantic-ui-react';

export const AppHeader = () => (
  <Container textAlign='center' text>
    <Divider hidden />
    <Header as='h1'>#todo</Header>
    <Divider hidden />
  </Container>
);
