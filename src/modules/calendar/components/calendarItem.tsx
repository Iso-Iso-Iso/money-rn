import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { calendarItemStyles } from "./calendarItem.styles";
import { Moment } from "moment";

interface CalendarItemProps {
    isActive?: boolean;
    withoutLeftMargin?: boolean;
    withoutRightMargin?: boolean;
    date: Moment;
}

const CalendarItem: FC<CalendarItemProps> = ({
    isActive,
    withoutLeftMargin,
    withoutRightMargin,
    date,
}) => {
    const currentDateName = useMemo(
        () => date.format("dddd").substring(0, 3),
        [date],
    );

    const currentDateNumber = useMemo(() => date.format("DD"), [date]);

    return (
        <View
            style={[
                calendarItemStyles.item,
                isActive && calendarItemStyles.itemActive,
                withoutLeftMargin && calendarItemStyles.withoutLeftMargin,
                withoutRightMargin && calendarItemStyles.withoutRightMargin,
            ]}>
            <Text
                style={[
                    calendarItemStyles.dayName,
                    isActive && calendarItemStyles.dayNameActive,
                ]}>
                {currentDateName}
            </Text>
            <Text
                style={[
                    calendarItemStyles.dayNumber,
                    isActive && calendarItemStyles.dayNumberActive,
                ]}>
                {currentDateNumber}
            </Text>
        </View>
    );
};

export default CalendarItem;
