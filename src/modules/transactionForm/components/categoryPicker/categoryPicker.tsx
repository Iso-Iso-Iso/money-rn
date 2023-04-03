import React, { FC } from "react";
import { View } from "react-native";
import CategoryItem from "./components/categoryItem";
import { categoryPickerStyles } from "./categoryPicker.styles";
import {
    EARNINGS_CATEGORIES_CONFIG,
    LOSS_CATEGORIES_CONFIG,
} from "../../../../config/transactions";
import { CategoriesConfig } from "./types";

interface CategoryPickerProps {
    onCategoryChange(type?: string): void;
    config: CategoriesConfig;
    value: string;
}

const CategoryPicker: FC<CategoryPickerProps> = ({
    onCategoryChange,
    value,
    config,
}) => {
    return (
        <View style={categoryPickerStyles.grid}>
            {config.map(({ name, ...rest }) => (
                <CategoryItem
                    isActive={value === name}
                    onClick={onCategoryChange}
                    name={name}
                    key={name}
                    {...rest}
                />
            ))}
        </View>
    );
};

export default CategoryPicker;
