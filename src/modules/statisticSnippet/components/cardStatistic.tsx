import React, { FC } from "react";
import { Text, View } from "react-native";
import { statisticCardStyles } from "../statisticSnippet.styles";
import { ProgressCircle } from "react-native-svg-charts";
import { COLORS } from "../../../constants/styles";
import { CardStatisticProps } from "../types";
import { cardStatisticStyles } from "./cardStatistic.styles";

const CardStatistic: FC<CardStatisticProps> = ({
    title,
    description,
    progress = 0,
    color = COLORS.BLUE_LIGHT,
}) => {
    return (
        <View style={{ ...statisticCardStyles.card, backgroundColor: color }}>
            <Text style={statisticCardStyles.header}>{title}</Text>
            <Text style={statisticCardStyles.description}>{description}</Text>
            <ProgressCircle
                style={cardStatisticStyles.cardGraph}
                progress={progress}
                backgroundColor={"rgba(255,255,255,0.29)"}
                progressColor={COLORS.TEXT_COLOR_NEGATIVE}
            />
        </View>
    );
};

export default CardStatistic;
