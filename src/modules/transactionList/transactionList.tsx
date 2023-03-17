import React from "react";
import { View } from "react-native";
import { SectionHeader } from "../../components/sectionHeader";
import TransactionItem from "./components/transactionItem/transactionItem";

const TransactionList = () => {
    return (
        <View>
            <SectionHeader>All transactions</SectionHeader>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
        </View>
    );
};

export default TransactionList;
