import React from "react";
import { View } from "react-native";
import { SectionHeader } from "../../components/sectionHeader";
import TransactionItem from "./components/transactionItem/transactionItem";
import { ExpandButton } from "../../components/buttons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../constants/styles";
import { transactionListStyles } from "./transactionList.styles";

const TransactionList = () => {
    return (
        <View style={transactionListStyles.wrapper}>
            <SectionHeader>All transactions</SectionHeader>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <ExpandButton
                icon={
                    <Icon
                        name="attach-money"
                        size={20}
                        color={COLORS.BLUE_LIGHT}
                    />
                }>
                All transaction today
            </ExpandButton>
        </View>
    );
};

export default TransactionList;
