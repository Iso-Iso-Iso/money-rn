import { StyleSheet } from "react-native";
import create = StyleSheet.create;

export const eventCalendarStyles = create({
    weekWrapper: {
        flexDirection: "row",
        flex: 1,
    },
    calendar: { flex: 1, height: "100%" },
});
