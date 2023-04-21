import React from "react";
import { View } from "react-native";
import { MainLayout } from "../layouts/mainLayout";
import moment from "moment";
import { EventCalendar } from "../modules/eventCalendar";

const CalendarScreen = () => {
    return (
        <MainLayout>
            <EventCalendar />
        </MainLayout>
    );
};

export default CalendarScreen;
