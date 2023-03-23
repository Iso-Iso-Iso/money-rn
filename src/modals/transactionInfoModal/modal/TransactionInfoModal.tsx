import React, { FC } from "react";
import { Text } from "react-native";
import { SlideModal } from "../../../components/slideModal";

interface TransactionInfoModalProps {
    onClose?: () => void;
}

const TransactionInfoModal: FC<TransactionInfoModalProps> = ({ onClose }) => {
    return (
        <>
            <SlideModal onClose={onClose}>
                <Text>Modal</Text>
            </SlideModal>
        </>
    );
};

export default TransactionInfoModal;
