import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, FONT_FAMILY, SIZING } from "../../constants/styles";

export const transactionFormStyles = create({
    text: {
        fontSize: SIZING.H3,
        color: COLORS.BLUE,
        fontFamily: FONT_FAMILY,
    },
    button: {
        borderRadius: 6,
    },
});
