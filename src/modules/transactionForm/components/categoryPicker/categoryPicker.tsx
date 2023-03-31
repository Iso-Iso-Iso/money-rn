import React from "react";
import { View } from "react-native";
import CategoryItem from "./components/categoryItem";
import { categoryPickerStyles } from "./categoryPicker.styles";
import { LOSS_CATEGORIES_CONFIG } from "../../../../config/transactions";

const CategoryPicker = () => {
    return (
        <View style={categoryPickerStyles.grid}>
            {LOSS_CATEGORIES_CONFIG.map(({ name, ...rest }) => (
                <CategoryItem
                    isActive={false}
                    name={name}
                    key={name}
                    {...rest}
                />
            ))}
        </View>
    );
};

export default CategoryPicker;
