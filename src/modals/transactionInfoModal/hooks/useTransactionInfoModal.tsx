import { useModal } from "../../../hooks/modal/useModal";
import TransactionInfoModal from "../modal/TransactionInfoModal";
import React from "react";

export const useTransactionInfoModal = () => {
    const [showModal, hideModal] = useModal(() => (
        <TransactionInfoModal onClose={hideModal} />
    ));

    return [showModal, hideModal];
};
