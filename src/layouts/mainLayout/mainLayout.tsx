import React, { FC, PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { mainLayout } from "./mainLayout.styles";
import { Navbar } from "../../components/navbar";

type MainLayout = PropsWithChildren<{}>;

const MainLayout: FC<MainLayout> = ({ children }) => {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={mainLayout.dateWrapper}>{children}</View>
            </ScrollView>
            <Navbar />
        </>
    );
};

export default MainLayout;
