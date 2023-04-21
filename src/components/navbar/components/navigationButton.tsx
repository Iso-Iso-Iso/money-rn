import React, { FC, useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { navigationButtonStyles } from "./navigationButton.styles";
import { COLORS } from "../../../constants/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PATH } from "../../../routes/constants/path";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTypedNavigation } from "../../../hooks/useTypedNavigation";

type Link = (typeof PATH)[keyof typeof PATH];

interface NavigationButtonProps {
    iconName: string;
    name: string;
    link: Link;
}

const NavigationButton: FC<NavigationButtonProps> = (props) => {
    const { iconName, name, link } = props;
    const route = useRoute();

    const navigation = useTypedNavigation();

    const isActiveRoute = useMemo(
        () => link === route.name,
        [link, route.name],
    );

    const navigate = () => {
        navigation.navigate(link);
    };

    return (
        <Pressable onPress={navigate}>
            <View style={navigationButtonStyles.button}>
                <Icon
                    name={iconName}
                    size={30}
                    color={isActiveRoute ? COLORS.BLUE_LIGHT : COLORS.GRAY}
                />
                <Text
                    style={[
                        navigationButtonStyles.text,
                        isActiveRoute && navigationButtonStyles.textActive,
                    ]}>
                    {name}
                </Text>
            </View>
        </Pressable>
    );
};

export default NavigationButton;
