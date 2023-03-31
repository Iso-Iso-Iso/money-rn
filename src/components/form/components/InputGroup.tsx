import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView, ViewProps } from "react-native";

const InputGroup: FC<PropsWithChildren<ViewProps>> = ({
    children,
    ...rest
}) => {
    return <SafeAreaView {...rest}>{children}</SafeAreaView>;
};

export default InputGroup;
