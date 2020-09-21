import moment from 'moment';
import { useMemo } from 'react';

const useCalendar = ({ allHabits, calendarActualDay, choseActualWeekDay }) => {
  const currentHabitsT = useMemo(() => {
    const currentHabitsTT = [];

    for (let habit of allHabits) {
      const startPlanningTime = habit.planningTime;
      let startPlanningTimeinML = new Date(startPlanningTime).getTime(); // 1498555006770
      let startPlanningTimeinCalendar = moment(startPlanningTimeinML).format(
        'L',
      );

      switch (habit.iteration) {
        case 'onceInTwoDays':
          const arrayHabitsOnceInTwoDays = [];

          for (let i = 0; i < 21; i++) {
            arrayHabitsOnceInTwoDays.push(
              moment(startPlanningTimeinML).format('L'),
            );
            startPlanningTimeinML += 86400000 * 2;
          }

          // console.log('arrayHabitsOnceInTwoDays', arrayHabitsOnceInTwoDays);
          for (let arrayHabit of arrayHabitsOnceInTwoDays) {
            if (arrayHabit.includes(calendarActualDay)) {
              currentHabitsTT.push({
                ...habit,
                day: calendarActualDay,
                arrayDate: [...arrayHabitsOnceInTwoDays],
              });
              // setCurrentHabits(prevState => [...prevState, habit]);
            }
          }
          break;

        case 'everyday':
          const arrayHabitsEveryDay = [];
          for (let i = 0; i < 21; i++) {
            arrayHabitsEveryDay.push(moment(startPlanningTimeinML).format('L'));
            startPlanningTimeinML += 86400000;
          }
          for (let arrayHabit of arrayHabitsEveryDay) {
            if (arrayHabit.includes(calendarActualDay)) {
              currentHabitsTT.push({
                ...habit,
                day: calendarActualDay,
                arrayDate: [...arrayHabitsEveryDay],
              });
              // console.log(arrayHabitsEveryDay, 'arrayHabitsEveryDay!!!!!!!!!');
              // setCurrentHabits(prevState => [...prevState, habit]);
            }
          }
          break;

        case 'TueThuSat':
          const iterationTueThuSat = habit.iteration
            .replace(/^(.{3})(.{3})(.*)$/, '$1 $2 $3')
            .split(' ');

          for (let iteration of iterationTueThuSat) {
            if (iteration.includes(choseActualWeekDay)) {
              currentHabitsTT.push({ ...habit, day: calendarActualDay });
              // setCurrentHabits(prevState => [...prevState, habit]);
            }
          }
          break;

        case 'MonWedFri':
          const iterationMonWedFri = habit.iteration
            .replace(/^(.{3})(.{3})(.*)$/, '$1 $2 $3')
            .split(' ');

          for (let iteration of iterationMonWedFri) {
            // console.log(iteration, "iteration!!!!!!!!!!!!!!!!!!!!!");
            if (iteration.includes(choseActualWeekDay)) {
              currentHabitsTT.push({ ...habit, day: calendarActualDay });
              // setCurrentHabits(prevState => [...prevState, habit]);
            }
          }
          break;

        default:
          break;
      }
    }

    return currentHabitsTT;
  }, [allHabits, calendarActualDay, choseActualWeekDay]);

  // console.log('currentHabitsT', currentHabitsT);

  return { currentHabitsT };
};

export default useCalendar;
