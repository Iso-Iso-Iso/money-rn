import React from "react";
import { MainLayout } from "../layouts/mainLayout";
import { Calendar } from "../modules/calendar";
import TransactionList from "../modules/transactionList/transactionList";
import StatisticSnippet from "../modules/statisticSnippet/statisticSnippet";

const HomeScreen = () => {
    return (
        <MainLayout>
            <Calendar />
            <TransactionList />
            <StatisticSnippet />
        </MainLayout>
    );
};

export default HomeScreen;
