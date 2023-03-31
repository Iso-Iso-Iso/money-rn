import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS, INDENT, SIZING } from "../../../constants/styles";

export const formInputStyles = create({
    input: {
        borderColor: COLORS.BLUE,
        borderWidth: 2,
        fontSize: SIZING.H2,
        width: "100%",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginBottom: INDENT.SMALL,
    },
});
