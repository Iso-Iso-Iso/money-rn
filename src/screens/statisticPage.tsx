import React from "react";
import { Text, View } from "react-native";
import { MainLayout } from "../layouts/mainLayout";
import { PieChart } from "react-native-svg-charts";
import { Circle, G } from "react-native-svg";
import { Image } from "@rneui/base";

const data = [
    {
        key: 1,
        amount: 50,
        svg: { fill: "#600080" },
    },
    {
        key: 2,
        amount: 50,
        svg: { fill: "#9900cc" },
    },
    {
        key: 3,
        amount: 40,
        svg: { fill: "#c61aff" },
    },
    {
        key: 4,
        amount: 95,
        svg: { fill: "#d966ff" },
    },
    {
        key: 5,
        amount: 35,
        svg: { fill: "#ecb3ff" },
    },
];
// @ts-ignore
const Labels = ({ slices, height, width }) => {
    // @ts-ignore
    return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
            <G key={index} x={labelCentroid[0]} y={labelCentroid[1]}>
                <Circle r={18} fill={"white"} />
            </G>
        );
    });
};

const StatisticPage = () => {
    return (
        <MainLayout>
            <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                outerRadius={"95%"}>
                {/*// @ts-ignore*/}
                <Labels />
            </PieChart>
        </MainLayout>
    );
};

export default StatisticPage;
