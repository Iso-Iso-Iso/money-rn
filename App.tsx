import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/routes";
import { PortalHost, PortalProvider } from "@gorhom/portal";
import { PORTALS } from "./src/constants/portals";

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <PortalProvider>
                <Router />
                <PortalHost name={PORTALS.MODAL} />
            </PortalProvider>
        </NavigationContainer>
    );
}

export default App;
