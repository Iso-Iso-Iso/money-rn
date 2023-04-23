import React, { FC } from "react";
import { View } from "react-native";
import { useCalendarDates } from "../../hooks/useCalendarDates";
import { useCalendarMatrixView } from "../../hooks/useCalendarMatrixView";
import CalendarItem from "./components/calendarItem";
import { eventCalendarStyles } from "./eventCalendar.styles";
import { Moment } from "moment";

interface EventCalendarProps {
    daysMatrix: Moment[][];
}

const EventCalendar: FC<EventCalendarProps> = ({daysMatrix}) => {
    return (
        <View style={eventCalendarStyles.calendar}>
            {daysMatrix.map((dates, index) => (
                <View key={index} style={eventCalendarStyles.weekWrapper}>
                    {dates.map((moment, index) => (
                        <CalendarItem
                            date={moment}
                            key={index}
                            highlightCurrentMonth
                            highlightCurrentDay
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

export default EventCalendar;
