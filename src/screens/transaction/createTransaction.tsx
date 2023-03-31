import React from "react";
import { View } from "react-native";
import { MainLayout } from "../../layouts/mainLayout";
import { TransactionForm } from "../../modules/transactionForm";

const CreateTransaction = () => {
    return (
        <MainLayout>
            <TransactionForm />
        </MainLayout>
    );
};

export default CreateTransaction;
