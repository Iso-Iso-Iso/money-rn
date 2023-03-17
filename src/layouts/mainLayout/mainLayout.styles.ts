import { Dimensions, StyleSheet } from "react-native";
import { COLORS, INDENT } from "../../constants/styles";

export const mainLayout = StyleSheet.create({
    wrapper: {
        padding: INDENT.MEDIUM,
        backgroundColor: COLORS.BACKGROUND,
        minHeight: Dimensions.get("window").height,
    },
});
