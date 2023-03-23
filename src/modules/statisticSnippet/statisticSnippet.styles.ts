import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, FONT_FAMILY, INDENT, SIZING } from "../../constants/styles";
export const statisticSnippetStyles = create({
    wrapper: {
        gap: INDENT.HIGH,
    },
});

export const statisticCardStyles = create({
    card: {
        height: 120,
        width: 180,
        backgroundColor: "green",
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    header: {
        color: COLORS.TEXT_COLOR_NEGATIVE,
        fontFamily: FONT_FAMILY,
        fontSize: SIZING.H1,
        fontWeight: "bold",
    },
    description: {
        color: COLORS.TEXT_COLOR_NEGATIVE,
        fontFamily: FONT_FAMILY,
        fontSize: SIZING.H3,
        fontWeight: "bold",
    },
});
