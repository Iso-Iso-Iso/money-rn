import React, { FC, PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { mainLayout } from "./mainLayout.styles";

type MainLayout = PropsWithChildren<{}>;

const MainLayout: FC<MainLayout> = ({ children }) => {
    return (
        <ScrollView>
            <View style={mainLayout.wrapper}>{children}</View>
        </ScrollView>
    );
};

export default MainLayout;
