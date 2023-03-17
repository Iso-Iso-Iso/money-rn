import React, { FC, useEffect, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { transactionCardStyles } from "./transactionCard.styles";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../../../constants/styles";
import { useAnimated } from "../../../../../hooks/useAnimated";

const ANIMATION_DURATION = 100;

interface TransactionCardProps {
    onPress?: () => void;
}

const TransactionCard: FC<TransactionCardProps> = ({ onPress }) => {
    const [isPressed, setIsPressed] = useState(false);

    const fadeAnim = useAnimated(1);

    useEffect(() => {
        if (!isPressed) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: ANIMATION_DURATION,
                useNativeDriver: true,
            }).start();
            return;
        }
        Animated.timing(fadeAnim, {
            toValue: 0.95,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim, isPressed]);

    return (
        <Pressable
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}>
            <Animated.View
                style={{
                    ...transactionCardStyles.card,
                    transform: [{ scale: fadeAnim }],
                }}>
                <View style={transactionCardStyles.decorationLine} />
                <View style={transactionCardStyles.descriptionWrapper}>
                    <Text style={transactionCardStyles.title}>Products</Text>
                    <Text style={transactionCardStyles.description}>12$</Text>
                </View>
                <View style={transactionCardStyles.viewButton}>
                    <Icon
                        name="arrow-forward-outline"
                        size={30}
                        color={COLORS.GRAY_LIGHT}
                    />
                </View>
            </Animated.View>
        </Pressable>
    );
};

export default TransactionCard;
