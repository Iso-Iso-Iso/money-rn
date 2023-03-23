import React, { useMemo } from "react";
import CalendarItem from "./components/calendarItem";
import { View } from "react-native";
import { calendarStyles } from "./calendar.styles";
import { SectionHeader } from "../../components/sectionHeader";
import moment from "moment";
import { useCurrentDate } from "../../hooks/helpers/dates";
import { ExpandButton } from "../../components/buttons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../constants/styles";

const Calendar = () => {
    const todayDate = useCurrentDate();
    const arr = [1, 2, 3, 4, 5];
    return (
        <View style={calendarStyles.wrapper}>
            <SectionHeader>{todayDate}</SectionHeader>
            <View style={calendarStyles.dateWrapper}>
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
            <ExpandButton
                icon={
                    <Icon
                        name="calendar-today"
                        size={20}
                        color={COLORS.BLUE_LIGHT}
                        style={calendarStyles.buttonIcon}
                    />
                }>
                View calendar
            </ExpandButton>
        </View>
    );
};

export default Calendar;
