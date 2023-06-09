import React, { useState } from "react";
import { Text, View } from "react-native";
import { FormInput, InputGroup, InputHeader } from "../../components/form";
import CategoryPicker from "./components/categoryPicker/categoryPicker";
import { Switch } from "@rneui/themed";
import { transactionFormStyles } from "./transactionForm.styles";
import RowGroup from "../../layouts/rowGroup/rowGroup";
import { COLORS } from "../../constants/styles";
import { Button } from "@rneui/base";
import {
    EARNINGS_TRANSACTION_TYPE,
    LOSS_TRANSACTION_TYPE,
} from "../../constants/transactions";
import {
    EARNINGS_CATEGORIES_CONFIG,
    LOSS_CATEGORIES_CONFIG,
} from "../../config/transactions";

const TransactionForm = () => {
    const [isEarnings, setIsEarnings] = useState(false);

    const [currentType, setCurrentType] = useState("");

    const onTransactionTypeChange = () => {
        setIsEarnings((prev) => !prev);
        setCurrentType("");
    };

    return (
        <View
            style={{
                flex: 1,
            }}>
            <InputGroup>
                <InputHeader>Transaction amount:</InputHeader>
                <FormInput />
            </InputGroup>
            <InputHeader>Transaction type:</InputHeader>
            <RowGroup spaceBetween marginBottom>
                <Text style={transactionFormStyles.text}>
                    {isEarnings
                        ? EARNINGS_TRANSACTION_TYPE
                        : LOSS_TRANSACTION_TYPE}
                </Text>
                <Switch
                    value={isEarnings}
                    onValueChange={onTransactionTypeChange}
                    color={COLORS.BLUE}
                />
            </RowGroup>
            <InputGroup>
                <InputHeader>Category:</InputHeader>
                <CategoryPicker
                    value={currentType}
                    onCategoryChange={(val = "") => setCurrentType(val)}
                    config={
                        isEarnings
                            ? EARNINGS_CATEGORIES_CONFIG
                            : LOSS_CATEGORIES_CONFIG
                    }
                />
            </InputGroup>
            <Button
                title={"Let's go"}
                color={COLORS.BLUE}
                buttonStyle={transactionFormStyles.button}
                containerStyle={{ flex: 1, justifyContent: "flex-end" }}
            />
        </View>
    );
};

export default TransactionForm;
