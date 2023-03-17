import { useRef } from "react";
import { usePanResponder } from "./usePanResponder";
import { UsePanResponderPositioner } from "../types/types";

export const usePanResponderPositioner: UsePanResponderPositioner = (
    config,
) => {
    const { onMoveShouldSetPanResponder = () => true } = config || {};

    const xPos = useRef(0);
    const yPos = useRef(0);

    const panResponder = usePanResponder({
        onMoveShouldSetPanResponder,
        onPanResponderMove(env, gestureState) {
            xPos.current = gestureState.dx;
            yPos.current = gestureState.dy;
        },
        ...config,
    });

    return { xPos, yPos, panHandlers: panResponder.panHandlers };
};
