import React from "react";
import { MainLayout } from "../layouts/mainLayout";
import { Calendar } from "../modules/calendar";
import TransactionList from "../modules/transactionList/transactionList";

const HomeScreen = () => {
    return (
        <MainLayout>
            <Calendar />
            <TransactionList />
        </MainLayout>
    );
};

export default HomeScreen;
