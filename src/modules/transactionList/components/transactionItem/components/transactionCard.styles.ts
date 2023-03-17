import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, INDENT, SIZING } from "../../../../../constants/styles";
import create = StyleSheet.create;

export const transactionCardStyles = create({
    card: {
        borderRadius: 12,
        flexDirection: "row",
        height: 70,
        padding: INDENT.SMALL,
        alignItems: "flex-start",
        backgroundColor: COLORS.WHITE,
        marginBottom: INDENT.SMALL,
    },
    cardPressed: {
        transform: [{ scale: 0.9 }],
    },
    decorationLine: {
        width: 5,
        height: "100%",
        borderRadius: 99,
        backgroundColor: COLORS.BLUE_LIGHT,
        marginRight: 10,
    },
    descriptionWrapper: {
        marginRight: "auto",
    },
    title: {
        fontFamily: FONT_FAMILY,
        fontSize: SIZING.H2,
        fontWeight: "bold",
        color: COLORS.TEXT_COLOR,
    },
    description: {
        fontFamily: FONT_FAMILY,
        fontSize: SIZING.H3,
        color: COLORS.TEXT_COLOR,
    },
    viewButton: {
        borderWidth: 2,
        borderColor: COLORS.GRAY_LIGHT,
        width: 50,
        height: 50,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
    },
});
