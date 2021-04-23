import { Container, Tab } from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'All',
    onTabChange: () => console.log('All'),
  },
  {
    menuItem: 'Active',
    onTabChange: () => console.log('Active'),
  },
  {
    menuItem: 'Completed',
    onTabChange: () => console.log('Completed'),
  },
];

export const ItemStatusFilter = () => (
  <Container fluid>
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  </Container>
);
