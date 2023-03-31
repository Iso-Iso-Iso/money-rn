import React, { FC, PropsWithChildren } from "react";
import { Text } from "react-native";
import { inputHeaderStyles } from "./inputHeader.styles";

const InputHeader: FC<PropsWithChildren> = ({ children }) => {
    return <Text style={inputHeaderStyles.header}>{children}</Text>;
};

export default InputHeader;
