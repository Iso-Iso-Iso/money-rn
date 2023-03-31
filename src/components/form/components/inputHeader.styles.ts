import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, FONT_FAMILY, INDENT, SIZING } from "../../../constants/styles";

export const inputHeaderStyles = create({
    header: {
        fontWeight: "bold",
        fontSize: SIZING.H2,
        fontFamily: FONT_FAMILY,
        color: COLORS.BLUE,
        marginBottom: INDENT.SMALL,
    },
});
