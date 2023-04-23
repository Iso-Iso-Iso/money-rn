import moment from "moment/moment";
import { useMemo } from "react";
import { Moment } from "moment";

type UseCalendarDates = (currentDate?: Moment) => Moment[];

export const useCalendarDates: UseCalendarDates = (startPoint) => {
    const calendarDates = useMemo(() => {
        const now = startPoint || moment();
        const datesList = [];
        const numOfDates = now.daysInMonth();
        const firstDateOfCurrentMonth = moment(
            `${now.format("Y/M")}/1`,
            "Y/M/D",
        );

        for (let i = 0; i < numOfDates; i++) {
            datesList.push(firstDateOfCurrentMonth.clone().add(i, "day"));
        }

        const numOfWeekDay = datesList[0].isoWeekday();

        for (let i = 1; i < numOfWeekDay; i++) {
            datesList.unshift(
                firstDateOfCurrentMonth.clone().subtract(i, "day"),
            );
        }

        const lastDateDayOfWeek = datesList[datesList.length - 1].isoWeekday();
        const lastDay = datesList[datesList.length - 1];

        for (let i = 1; i <= 7 - lastDateDayOfWeek; i++) {
            datesList.push(lastDay.clone().add(i, "day"));
        }

        if (datesList.length > 35) {
            return datesList;
        }

        const additionWeekMonth = datesList[datesList.length - 1];

        for (let i = 1; i <= 7; i++) {
            datesList.push(additionWeekMonth.clone().add(i, "day"));
        }

        return datesList;
    }, [startPoint]);

    return calendarDates;
};
