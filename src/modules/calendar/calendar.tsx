import React, { useMemo } from "react";
import CalendarItem from "./components/calendarItem";
import { View } from "react-native";
import { calendarWrapper } from "./calendar.styles";
import { SectionHeader } from "../../components/sectionHeader";
import moment from "moment";
import { useCurrentDate } from "../../hooks/helpers/dates";

const Calendar = () => {
    const todayDate = useCurrentDate();
    const arr = [1, 2, 3, 4, 5];
    return (
        <View>
            <SectionHeader>{todayDate}</SectionHeader>
            <View style={calendarWrapper.wrapper}>
                {arr.map((el, index) => (
                    <CalendarItem
                        key={el}
                        isActive={el == 3}
                        withoutLeftMargin={index == 0}
                        withoutRightMargin={index == arr.length - 1}
                        date={moment()}
                    />
                ))}
            </View>
        </View>
    );
};

export default Calendar;
