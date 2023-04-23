import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import moment, { Moment } from "moment";
import { calendarItemStyles } from "./calendarItem.styles";

interface CalendarItemProps {
    date: Moment;
    highlightCurrentMonth?: boolean;
    highlightCurrentDay?: boolean;
}

const CalendarItem: FC<CalendarItemProps> = ({
    date,
    highlightCurrentMonth = false,
    highlightCurrentDay = false,
}) => {
    const isCurrentMonth = useMemo(() => {
        const currentDate = moment();

        return (
            currentDate.format("M") === date.format("M") &&
            currentDate.format("Y") === date.format("Y")
        );
    }, [date]);

    const isCurrentMonthHighlight = useMemo(() => {
        const isCurrentMonthHighlight = highlightCurrentMonth && isCurrentMonth;

        return isCurrentMonthHighlight;
    }, [highlightCurrentMonth, date]);

    const isCurrentDateHighlight = useMemo(() => {
        const currentDate = moment();

        return (
            highlightCurrentDay &&
            isCurrentMonth &&
            currentDate.format("D") === date.format("D")
        );
    }, [highlightCurrentDay, isCurrentMonth]);

    return (
        <View
            style={[
                calendarItemStyles.wrapper,
                isCurrentMonthHighlight &&
                    calendarItemStyles.currentMonthHighlight,
            ]}
        >
            <Text
                style={[
                    calendarItemStyles.date,
                    isCurrentDateHighlight &&
                        calendarItemStyles.currentDateHighlight,
                ]}
            >
                {date.format("D")}
            </Text>
        </View>
    );
};

export default CalendarItem;
