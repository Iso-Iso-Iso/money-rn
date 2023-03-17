import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, FONT_FAMILY, INDENT, SIZING } from "../../constants/styles";

export const calendarWrapper = create({
    wrapper: {
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
});
