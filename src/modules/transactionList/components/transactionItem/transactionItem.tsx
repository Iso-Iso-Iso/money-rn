import React from "react";
import TransactionCard from "./components/transactionCard";
import { useTransactionInfoModal } from "../../../../modals/transactionInfoModal";

const TransactionItem = () => {
    const [showModal] = useTransactionInfoModal();

    return (
        <>
            <TransactionCard onPress={showModal} />
        </>
    );
};

export default TransactionItem;
