import React from "react";
import { View } from "react-native";
import { navbarStyles } from "./navbar.styles";
import NavigationButton from "./components/navigationButton";
import { PATH } from "../../routes/constants/path";

const Navbar = () => {
    return (
        <View style={navbarStyles.navbar}>
            <NavigationButton iconName="home" name="Home" link={PATH.HOME} />
            <NavigationButton
                iconName="data-usage"
                name="Statistic"
                link={PATH.STATISTIC}
            />
            <NavigationButton
                iconName="add-circle"
                name="New"
                link={PATH.CREATE_TRANSACTION}
            />
            <NavigationButton
                iconName="person"
                name="Profile"
                link={PATH.PROFILE}
            />
        </View>
    );
};

export default Navbar;
