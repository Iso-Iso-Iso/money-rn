import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, FONT_FAMILY, SIZING } from "../../../constants/styles";

export const navigationButtonStyles = create({
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {},
    iconActive: {},
    text: {
        color: COLORS.GRAY,
        fontFamily: FONT_FAMILY,
        fontSize: SIZING.H4,
    },
    textActive: {
        color: COLORS.BLUE_LIGHT,
    },
});
