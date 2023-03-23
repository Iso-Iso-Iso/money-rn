import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, FONT_FAMILY, INDENT, SIZING } from "../../constants/styles";

export const calendarStyles = create({
    wrapper: {
        marginBottom: INDENT.SMALL,
    },
    dateWrapper: {
        flexDirection: "row",
        marginBottom: INDENT.MEDIUM,
    },
    header: {
        marginBottom: 10,
        fontSize: SIZING.H1,
        fontFamily: FONT_FAMILY,
        fontWeight: "bold",
        color: COLORS.TEXT_COLOR,
    },
    buttonIcon: {
        marginRight: 5,
    },
});
