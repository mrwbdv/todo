import { useState } from 'react';
import { Container, Menu } from 'semantic-ui-react';

const panes = [
  {
    id: 0,
    menuItem: 'All',
  },
  {
    id: 1,
    menuItem: 'Active',
  },
  {
    id: 2,
    menuItem: 'Completed',
  },
];

interface IProps {
  onTabChange: (item: string) => void;
}

export const ItemStatusFilter: React.FC<IProps> = ({ onTabChange }) => {
  const [activeItem, setActiveItem] = useState('All');
  const handleFilterChange = (item: string) => {
    setActiveItem(item);
    onTabChange(item);
  };

  return (
    <Container fluid>
      <Menu pointing secondary>
        {panes.map(({ id, menuItem }) => {
          return (
            <Menu.Item
              key={id}
              active={activeItem === menuItem}
              name={`${menuItem}`}
              onClick={() => handleFilterChange(menuItem)}
            />
          );
        })}
      </Menu>
    </Container>
  );
};
