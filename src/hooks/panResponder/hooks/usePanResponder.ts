import { useRef } from "react";
import { PanResponder, PanResponderCallbacks } from "react-native";

export const usePanResponder = (config: PanResponderCallbacks) =>
    useRef(PanResponder.create(config)).current;
