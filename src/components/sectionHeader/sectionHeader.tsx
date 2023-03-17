import React, {FC, PropsWithChildren} from "react";
import {Text} from "react-native";
import {sectionHeaderStyles} from "./sectionHeader.styles";

const SectionHeader: FC<PropsWithChildren> = ({children}) => {
    return <Text style={sectionHeaderStyles.header}>{children}</Text>;
};

export default SectionHeader;
