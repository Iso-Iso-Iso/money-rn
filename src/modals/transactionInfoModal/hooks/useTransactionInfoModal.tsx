import { useModal } from "../../../hooks/modal/useModal";
import TransactionInfoModal from "../components/TransactionInfoModal";
import React from "react";

export const useTransactionInfoModal = () => {
    const [showModal, hideModal] = useModal(() => (
        <TransactionInfoModal onClose={hideModal} />
    ));

    return [showModal, hideModal];
};
