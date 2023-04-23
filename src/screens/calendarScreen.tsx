import React, { useState } from "react";
import { MainLayout } from "../layouts/mainLayout";
import moment from "moment";
import { EventCalendar } from "../modules/eventCalendar";
import { useCalendarDates } from "../hooks/useCalendarDates";
import { useCalendarMatrixView } from "../hooks/useCalendarMatrixView";
import { DateNavigator } from "../components/dateNavigator";

const CalendarScreen = () => {
    const [currentDate, setCurrentDate] = useState(moment());
    const calendarDates = useCalendarDates(currentDate);
    const matrix = useCalendarMatrixView(calendarDates);

    return (
        <MainLayout>
            <DateNavigator date={currentDate} onChange={setCurrentDate} />
            <EventCalendar daysMatrix={matrix} />
        </MainLayout>
    );
};

export default CalendarScreen;
