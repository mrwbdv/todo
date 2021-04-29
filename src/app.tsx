import { AppHeader, ItemAddForm, TodoList, ItemStatusFilter } from './components';

import { Container, Divider } from 'semantic-ui-react';
import { useState } from 'react';

import { TItem } from './redux/types';
import { getVisibleTodos } from './redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const [active, setActive] = useState('All');

  const filteredData = useSelector(getVisibleTodos);

  console.log(filteredData);

  const handleActive = (item: string) => {
    setActive(item);
  };

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

  const dayz = [
    {
      id: 1,
      day: 'Mon',
    },
    {
      id: 2,
      day: 'Tue',
    },
    {
      id: 3,
      day: 'Wed',
    },
    {
      id: 4,
      day: 'Thu',
    },
    {
      id: 5,
      day: 'Fri',
    },
    {
      id: 6,
      day: 'Sat',
    },
    {
      id: 7,
      day: 'Sun',
    },
  ];

  if (active === 'Completed') {
    const statistics: IStatistics = {};
    const days = filteredData?.map((item: TItem) => {
      const copmletedDay = new Date(item.completedAt).getDay();
      return daysMap[copmletedDay];
    });

    days?.forEach((weekDay: string) => {
      const count = countDays(days, weekDay);
      statistics[weekDay] = count;
    });
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
      <TodoList todos={filteredData} />
    </Container>
  );
};
