import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';

import { setFilter } from '../../redux/actions';
import { getFilterSelector } from '../../redux/selectors';

import { ITEM_VISIBILITY_FILTERS } from '../../redux/types';

interface IProps {
  onTabChange: (item: string) => void;
}

export const ItemStatusFilter: React.FC<IProps> = ({ onTabChange }) => {
  const dispatch = useDispatch();

  const filterItem = useSelector(getFilterSelector);

  const handleFilterChange = (item: string) => {
    dispatch(setFilter(item));
    onTabChange(item);
  };

  return (
    <Container fluid>
      <Menu pointing secondary>
        {Object.keys(ITEM_VISIBILITY_FILTERS).map((filterKey) => {
          const currentFilter = ITEM_VISIBILITY_FILTERS[filterKey];
          return (
            <Menu.Item
              key={`makecustomfuncforrandomid-${currentFilter}`}
              active={filterItem === currentFilter}
              name={`${currentFilter}`}
              onClick={() => handleFilterChange(currentFilter)}
            />
          );
        })}
      </Menu>
    </Container>
  );
};
