import React, { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { rowGroupStyles } from "./rowGroup.styles";
import { INDENT } from "../../constants/styles";

interface RowGroupProps extends PropsWithChildren {
    spaceBetween?: boolean;
    marginBottom?: boolean;
}

const RowGroup: FC<RowGroupProps> = ({
    children,
    spaceBetween,
    marginBottom,
}) => {
    return (
        <View
            style={[
                rowGroupStyles.wrapper,
                spaceBetween && { justifyContent: "space-between" },
                marginBottom && { marginBottom: INDENT.SMALL },
            ]}>
            {children}
        </View>
    );
};

export default RowGroup;
