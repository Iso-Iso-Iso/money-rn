import React, {
    FC,
    PropsWithChildren,
    ReactNode,
    useEffect,
    useState,
} from "react";
import { Animated, Pressable, Text, ViewStyle } from "react-native";
import { expandButtonStyles } from "./expandButton.styles";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../../constants/styles";
import { useAnimated } from "../../../../hooks/useAnimated";

interface ExpandButtonProps {
    children?: string;
    onPress?: () => void;
    onLongPress?: () => void;
    styles?: ViewStyle;
    icon?: ReactNode;
}

const ANIMATION_DURATION = 100;

const ExpandButton: FC<ExpandButtonProps> = ({
    children,
    onPress,
    onLongPress,
    styles,
    icon: ChildrenIcon,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const sizingAnimated = useAnimated(1);
    const opacityAnimated = useAnimated(1);

    useEffect(() => {
        if (isHovered) {
            Animated.parallel([
                Animated.timing(sizingAnimated, {
                    toValue: 0.95,
                    duration: ANIMATION_DURATION,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnimated, {
                    toValue: 0.8,
                    duration: ANIMATION_DURATION,
                    useNativeDriver: true,
                }),
            ]).start();

            return;
        }
        Animated.parallel([
            Animated.timing(sizingAnimated, {
                toValue: 1,
                duration: ANIMATION_DURATION,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnimated, {
                toValue: 1,
                duration: ANIMATION_DURATION,
                useNativeDriver: true,
            }),
        ]).start();
    }, [isHovered]);

    return (
        <Pressable
            onPressIn={() => setIsHovered(true)}
            onPressOut={() => setIsHovered(false)}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Animated.View
                style={{
                    ...expandButtonStyles.button,
                    transform: [{ scale: sizingAnimated }],
                    opacity: opacityAnimated,
                    // ...styles,
                }}>
                {ChildrenIcon || (
                    <Icon
                        name="add-outline"
                        size={20}
                        color={COLORS.BLUE_LIGHT}
                        style={expandButtonStyles.icon}
                    />
                )}
                <Text style={expandButtonStyles.text}>
                    {children || "More"}
                </Text>
            </Animated.View>
        </Pressable>
    );
};

export default ExpandButton;
