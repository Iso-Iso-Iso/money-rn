import React, { FC } from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Moment } from "moment";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../constants/styles";
import { dateNavigatorStyles } from "./dateNavigator.styles";

interface DateNavigatorProps {
    date: Moment;
    onNext?: (nextDate: Moment) => void;
    onPrev?: (prevDate: Moment) => void;
    onChange?: (prevDate: Moment) => void;
}

const DateNavigator: FC<DateNavigatorProps> = ({
    date,
    onPrev = () => {},
    onNext = () => {},
    onChange = () => {},
}) => {
    const onPrevClick = () => {
        const prevMonth = date.clone().subtract(1, "month");
        onChange(prevMonth);
        onPrev(prevMonth);
    };

    const onNextClick = () => {
        const nextMonth = date.clone().add(1, "month");
        onChange(nextMonth);
        onNext(nextMonth);
    };

    return (
        <View style={dateNavigatorStyles.wrapper}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={dateNavigatorStyles.navigationButtons}
                onPress={onPrevClick}
            >
                <Icon
                    name="chevron-left"
                    color={COLORS.TEXT_COLOR_NEGATIVE}
                    size={25}
                    style={dateNavigatorStyles.icon}
                />
            </TouchableOpacity>
            <Text style={dateNavigatorStyles.dateFormat}>
                {date.format("Y/MM")}
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={dateNavigatorStyles.navigationButtons}
                onPress={onNextClick}
            >
                <Icon
                    name="chevron-right"
                    color={COLORS.TEXT_COLOR_NEGATIVE}
                    size={25}
                    style={dateNavigatorStyles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default DateNavigator;
