import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { SectionHeader } from "../../components/sectionHeader";
import { statisticSnippetStyles } from "./statisticSnippet.styles";
import CardStatistic from "./components/cardStatistic";
import { CardStatisticProps } from "./types";
import { COLORS, INDENT } from "../../constants/styles";

const statisticData: CardStatisticProps[] = [
    {
        title: "Usage",
        progress: 0.4,
        color: COLORS.GREEN,
        description: "Per day",
    },
    {
        title: "Usage",
        progress: 0.4,
        color: COLORS.YELLOW,
        description: "Per day",
    },
    {
        title: "Usage",
        progress: 0.4,
        color: COLORS.BLUE_LIGHT,
        description: "Per day",
    },
];

const StatisticSnippet = () => {
    return (
        <View>
            <SectionHeader>Statistics</SectionHeader>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                    <View style={{ width: INDENT.HIGH }} />
                )}
                data={statisticData}
                renderItem={({ item }) => <CardStatistic {...item} />}
            />
        </View>
    );
};

export default StatisticSnippet;
