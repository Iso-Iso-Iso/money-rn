import { useRef } from "react";
import { Animated } from "react-native";
import AnimatedConfig = Animated.AnimatedConfig;

export const useAnimated = (defaultValue: number, config?: AnimatedConfig) =>
    useRef(new Animated.Value(defaultValue, config)).current;
