import { StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS } from "../../constants/styles";

export const navbarStyles = create({
    navbar: {
        padding: 4,
        width: "100%",
        backgroundColor: COLORS.WHITE,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});
