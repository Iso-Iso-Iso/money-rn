import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { COLORS, INDENT } from "../../constants/styles";

export const mainLayout = StyleSheet.create({
    dateWrapper: {
        paddingHorizontal: INDENT.MEDIUM,
        paddingTop: (StatusBar?.currentHeight || 0) + INDENT.MEDIUM,
        paddingBottom: INDENT.MEDIUM,
        backgroundColor: COLORS.BACKGROUND,
        flex: 1,
    },
});
