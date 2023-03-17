import React, {
    FC,
    PropsWithChildren,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    Animated,
    Dimensions,
    PanResponder,
    Pressable,
    ScrollView,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useAnimated } from "../../hooks/useAnimated";
import { transactionCardStyles } from "../../modules/transactionList/components/transactionItem/components/transactionCard.styles";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/styles";
import { slideModalStyles } from "./slideModal.styles";
import { usePanResponder } from "../../hooks/panResponder/hooks/usePanResponder";
import { usePanResponderPositioner } from "../../hooks/panResponder";

interface SlideModalProps extends PropsWithChildren {
    onClose?: () => void;
}

const ANIMATION_DURATION = 200;
const MAX_OPACITY = 0.3;
const BOTTOM_START_STATUS = Dimensions.get("window").height;
const DISTANCE_TO_HIDE = 150;

const SlideModal: FC<SlideModalProps> = ({ children, onClose }) => {
    const backgroundAnimate = useAnimated(0);
    const popperAnimate = useAnimated(BOTTOM_START_STATUS);
    const frameId = useRef(0);

    const updateModalPosition = () => {
        frameId.current = requestAnimationFrame(() => {
            if (yPos.current < 0) {
                popperAnimate.setValue(0);
            } else {
                popperAnimate.setValue(yPos.current);
            }

            updateModalPosition();
        });
    };

    const hideModalAnimation = () => {
        Animated.parallel([
            Animated.timing(backgroundAnimate, {
                toValue: 0,
                duration: ANIMATION_DURATION,
                useNativeDriver: true,
            }),
            Animated.timing(popperAnimate, {
                toValue: BOTTOM_START_STATUS,
                duration: ANIMATION_DURATION,
                useNativeDriver: true,
            }),
        ]).start(onClose);
    };

    const onDragEnd = () => {
        cancelAnimationFrame(frameId.current);
        if (yPos.current > DISTANCE_TO_HIDE) {
            hideModalAnimation();
        } else {
            showModalAnimation();
        }
        yPos.current = 0;
    };

    const { yPos, panHandlers } = usePanResponderPositioner({
        onPanResponderGrant: updateModalPosition,
        onPanResponderRelease: onDragEnd,
    });

    const showModalAnimation = () => {
        Animated.parallel([
            Animated.timing(backgroundAnimate, {
                toValue: MAX_OPACITY,
                duration: ANIMATION_DURATION,
                useNativeDriver: true,
            }),
            Animated.timing(popperAnimate, {
                toValue: 0,
                duration: ANIMATION_DURATION,
                useNativeDriver: true,
            }),
        ]).start();
    };

    useEffect(showModalAnimation, []);

    return (
        <>
            <TouchableWithoutFeedback onPress={hideModalAnimation}>
                <Animated.View
                    style={{
                        ...slideModalStyles.modalBackground,
                        opacity: backgroundAnimate,
                    }}
                />
            </TouchableWithoutFeedback>
            <Animated.View
                style={{
                    ...slideModalStyles.modal,
                    transform: [{ translateY: popperAnimate }],
                }}>
                <View {...panHandlers}>
                    <TouchableHighlight
                        onPress={hideModalAnimation}
                        underlayColor={COLORS.GRAY_LIGHT}
                        style={slideModalStyles.closeButton}>
                        <Icon
                            name="chevron-down-outline"
                            size={30}
                            color={COLORS.BLUE}
                        />
                    </TouchableHighlight>
                </View>
                <ScrollView>{children}</ScrollView>
            </Animated.View>
        </>
    );
};

export default SlideModal;
