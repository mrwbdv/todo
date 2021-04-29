import { AppHeader, ItemAddForm, TodoList, ItemStatusFilter } from './components';

import { Container, Divider } from 'semantic-ui-react';
import { useState } from 'react';

import { TItem } from './redux/types';
import { getItemsSelector } from './redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const [active, setActive] = useState('All');

  const todos = useSelector(getItemsSelector);

  const handleActive = (item: string) => {
    setActive(item);
  };

  const filterData = (data: Array<TItem>, filter: string) => {
    switch (filter) {
      case 'Active': {
        return data.filter((todo) => !todo.completed);
      }
      case 'Completed': {
        return data.filter((todo) => todo.completed);
      }
    }
    return data;
  };

  const data = filterData(todos, active);

  interface IDay {
    [key: number]: string;
  }

  interface IStatistics {
    [key: string]: number;
  }
  const daysMap: IDay = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  };

  if (active === 'Completed') {
    const statistics: IStatistics = {};
    const days = data?.map((item) => {
      const copmletedDay = new Date(item.completedAt).getDay();
      return daysMap[copmletedDay];
    });

    days?.forEach((weekDay) => {
      const count = countDays(days, weekDay);
      statistics[weekDay] = count;
    });
    console.log(statistics);
  }

  function countDays(weekDays: string[], day: string) {
    let count = 0;
    for (let i = 0; i < weekDays.length; i++) {
      if (weekDays[i] === day) {
        count++;
      }
    }
    return count;
  }
  return (
    <Container text>
      <AppHeader />
      <ItemStatusFilter onTabChange={handleActive} />
      <Divider hidden />
      <ItemAddForm />
      <Divider hidden />
      <TodoList todos={data} />
    </Container>
  );
};
