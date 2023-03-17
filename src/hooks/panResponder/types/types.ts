import {
    GestureResponderHandlers,
    PanResponderCallbacks,

} from "react-native";
import { MutableRefObject } from "react";

export type ResponderConfig = Omit<PanResponderCallbacks, "onPanResponderMove">;

export type UsePanResponderPositionerReturnValue = {
    xPos: MutableRefObject<number>;
    yPos: MutableRefObject<number>;
    panHandlers: GestureResponderHandlers;
};

export type UsePanResponderPositioner = (
    config?: ResponderConfig | undefined,
) => UsePanResponderPositionerReturnValue;
