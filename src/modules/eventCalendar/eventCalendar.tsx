import React from "react";
import { View } from "react-native";
import { useCalendarDates } from "../../hooks/useCalendarDates";
import { useCalendarMatrixView } from "../../hooks/useCalendarMatrixView";
import CalendarItem from "./components/calendarItem";
import { eventCalendarStyles } from "./eventCalendar.styles";

const EventCalendar = () => {
    const calendarDates = useCalendarDates();
    const matrix = useCalendarMatrixView(calendarDates);
    return (
        <View style={eventCalendarStyles.calendar}>
            {matrix.map((dates, index) => (
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
