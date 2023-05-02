import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, FONT_FAMILY, SIZING } from "../../../constants/styles";

export const calendarItemStyles = create({
    wrapper: {
        borderColor: COLORS.GRAY_LIGHT,
        borderWidth: 1,
        flex: 1,
        padding: 4,
    },
    currentMonthHighlight: {
        borderColor: COLORS.BLUE_LIGHT,
    },
    date: {
        fontFamily: FONT_FAMILY,
        color: COLORS.GRAY,
        fontSize: SIZING.H4,
    },
    currentDateHighlight: {
        color: COLORS.TEXT_COLOR_NEGATIVE,
        backgroundColor: COLORS.BLUE,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 999,
        alignSelf: "flex-start",
    },
});
