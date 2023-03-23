import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/routes";
import { PortalHost, PortalProvider } from "@gorhom/portal";
import { PORTALS } from "./src/constants/portals";
import { hideNavigationBar } from "react-native-navigation-bar-color";
import { StatusBar } from "react-native";

function App(): JSX.Element {
    useEffect(() => {
        hideNavigationBar();
    }, []);

    return (
        <NavigationContainer>
            <PortalProvider>
                <StatusBar />
                <Router />
                <PortalHost name={PORTALS.MODAL} />
            </PortalProvider>
        </NavigationContainer>
    );
}

export default App;
