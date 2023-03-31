import React, { FC, PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { mainLayout } from "./mainLayout.styles";
import { Navbar } from "../../components/navbar";

type MainLayout = PropsWithChildren<{}>;

const MainLayout: FC<MainLayout> = ({ children }) => {
    return (
        <>
            <View style={{ flex: 1, height: "100%" }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={mainLayout.dateWrapper}>{children}</View>
                </ScrollView>
            </View>
            <Navbar />
        </>
    );
};

export default MainLayout;
