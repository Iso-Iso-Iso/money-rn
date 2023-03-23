import { Dimensions, StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLORS } from "../../../constants/styles";

export const transactionInfoModalStyles = create({
    modal: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "75%",
        width: "100%",
        backgroundColor: COLORS.WHITE,
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        overflow: "hidden",
    },
    modalBackground: {
        position: "absolute",
        left: 0,
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        opacity: 0.4,
    },
    closeButton: {
        alignItems: "center",
    },
});
