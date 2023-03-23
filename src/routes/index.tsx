import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { PATH } from "./constants/path";
import HomeScreen from "../screens/homeScreen";
import CreateTransaction from "../screens/transaction/createTransaction";

const Stack = createNativeStackNavigator();
const { Screen, Navigator } = Stack;

export const Router = () => (
    <Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Screen name={PATH.HOME} component={HomeScreen} />
        <Screen name={PATH.CREATE_TRANSACTION} component={CreateTransaction} />
    </Navigator>
);
