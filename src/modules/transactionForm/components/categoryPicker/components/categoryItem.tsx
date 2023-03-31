import React, { FC } from "react";
import { Text, View } from "react-native";
import { categoryItemStyles } from "./categoryItem.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../../../../constants/styles";
import { CategoryItemProps } from "../types";

const CategoryItem: FC<CategoryItemProps> = ({
    isActive,
    name,
    iconName,
    iconSize = 35,
}) => {
    return (
        <View style={categoryItemStyles.wrapper}>
            <View
                style={[
                    categoryItemStyles.iconWrapper,
                    isActive && categoryItemStyles.iconWrapperActive,
                ]}>
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={
                        isActive
                            ? COLORS.TEXT_COLOR_NEGATIVE
                            : COLORS.BLUE_LIGHT
                    }
                />
            </View>
            <Text style={categoryItemStyles.text}>{name}</Text>
        </View>
    );
};

export default CategoryItem;
