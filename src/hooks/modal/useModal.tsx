import { FC, ReactElement, ReactNode, useMemo, useState } from "react";
import { usePortal } from "@gorhom/portal";
import { PORTALS } from "../../constants/portals";
import { View } from "react-native";
import React from "react";

export const useModal = (Modal: () => ReactElement, deps: any[] = []) => {
    const portal = usePortal(PORTALS.MODAL);

    const RenderedModal = useMemo(() => {
        return <Modal key={"modal"} />;
    }, deps);
    const showModal = () => portal.addPortal(PORTALS.MODAL, RenderedModal);
    const hideModal = () => portal.removePortal(PORTALS.MODAL);

    return [showModal, hideModal];
};
