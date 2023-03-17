import { COLORS, FONT_FAMILY, SIZING } from "../../../constants/styles";
import { StyleSheet } from "react-native";
import create = StyleSheet.create;

export const calendarItemStyles = create({
    item: {
        height: 70,
        flex: 1,
        marginHorizontal: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: COLORS.GRAY_LIGHT,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    itemActive: {
        backgroundColor: COLORS.BLUE,
        borderColor: COLORS.BLUE,
        transform: [{ scale: 1.1 }],
        shadowColor: COLORS.BLUE_LIGHT,
        shadowOffset: {
            width: 12,
            height: 44,
        },
        shadowOpacity: 0.32,
        shadowRadius: 33,
        elevation: 23,
    },
    withoutLeftMargin: {
        marginLeft: 0,
    },
    withoutRightMargin: {
        marginRight: 0,
    },
    dayName: {
        fontFamily: FONT_FAMILY,
        fontSize: SIZING.H4,
        fontWeight: "bold",
        color: COLORS.TEXT_COLOR,
    },
    dayNameActive: {
        color: COLORS.TEXT_COLOR_NEGATIVE,
    },
    dayNumber: {
        fontFamily: FONT_FAMILY,
        fontSize: SIZING.H2,
        fontWeight: "bold",
        color: COLORS.TEXT_COLOR,
    },
    dayNumberActive: {
        color: COLORS.TEXT_COLOR_NEGATIVE,
    },
});
