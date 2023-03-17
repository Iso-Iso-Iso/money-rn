import { COLORS, FONT_FAMILY, INDENT, SIZING } from "../../constants/styles";
import {StyleSheet} from "react-native";
import create = StyleSheet.create;

export const sectionHeaderStyles = create({
    header: {
        marginBottom: INDENT.MEDIUM,
        fontSize: SIZING.H1,
        fontFamily: FONT_FAMILY,
        fontWeight: "bold",
        color: COLORS.TEXT_COLOR,
    },
});
