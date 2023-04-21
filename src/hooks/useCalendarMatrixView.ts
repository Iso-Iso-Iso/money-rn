import { Moment } from "moment";
import { useMemo } from "react";
const DAY_PER_WEEK = 7;
type UseCalendarMatrixView = (calendarDays: Moment[]) => Moment[][];

export const useCalendarMatrixView: UseCalendarMatrixView = (calendarDays) => {
    const matrixView = useMemo(() => {
        return calendarDays.reduce((matrix: Moment[][], el, i) => {
            const arrayIndex = Math.floor(i / DAY_PER_WEEK);

            if (!Array.isArray(matrix[arrayIndex])) {
                matrix[arrayIndex] = [];
            }

            matrix[arrayIndex].push(el);
            return matrix;
        }, []);
    }, []);

    return matrixView;
};
