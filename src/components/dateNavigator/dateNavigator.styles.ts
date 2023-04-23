import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, FONT_FAMILY, INDENT, SIZING } from "../../constants/styles";

export const dateNavigatorStyles = create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: INDENT.MEDIUM,
    },
    navigationButtons: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        height: 30,
        width: 30,
        padding: 0,
        backgroundColor: COLORS.BLUE,
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
    },
    dateFormat: {
        marginHorizontal: 10,
        fontSize: SIZING.H2,
        fontFamily: FONT_FAMILY,
        color: COLORS.BLUE_LIGHT,
    },
});
