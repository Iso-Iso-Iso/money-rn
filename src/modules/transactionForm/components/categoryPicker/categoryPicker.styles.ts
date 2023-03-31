import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { INDENT } from "../../../../constants/styles";

export const categoryPickerStyles = create({
    grid: {
        flexWrap: "wrap",
        flexDirection: "row",
        gap: INDENT.HIGH,
        justifyContent: "space-evenly",
        marginBottom: INDENT.MEDIUM,
    },
});
