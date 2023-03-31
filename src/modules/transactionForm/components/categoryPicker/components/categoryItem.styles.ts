import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, SIZING } from "../../../../../constants/styles";

export const categoryItemStyles = create({
    wrapper: {
        alignItems: "center",
        flexBasis: "15%",
        flexGrow: 1,
        flexShrink: 1,
    },
    iconWrapper: {
        padding: 4,
        borderWidth: 2,
        borderColor: COLORS.BLUE_LIGHT,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
    },
    iconWrapperActive: {
        backgroundColor: COLORS.BLUE,
        borderColor: COLORS.BLUE,
    },
    text: {
        fontSize: SIZING.H4,
        color: COLORS.BLUE_LIGHT,
    },
});
