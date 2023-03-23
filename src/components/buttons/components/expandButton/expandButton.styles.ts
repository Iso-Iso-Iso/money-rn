import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, SIZING } from "../../../../constants/styles";

export const expandButtonStyles = create({
    button: {
        flex: 1,
        paddingHorizontal: 2,
        paddingVertical: 4,
        backgroundColor: COLORS.BLUE_OPACITY,
        alignItems: "center",
        borderRadius: 4,
        justifyContent: "center",
        flexDirection: "row",
    },
    text: {
        borderRadius: 4,
        color: COLORS.BLUE_LIGHT,
        fontWeight: "bold",
        fontSize: SIZING.H3,
    },
    icon: {
        marginRight: 5,
    },
});
