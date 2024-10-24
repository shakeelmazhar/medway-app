/* eslint-disable import/extensions */
import React from "react";
import { Alert, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { moderateScale } from "react-native-size-matters";
import { isReadyRef } from "react-navigation-helpers";
import { palette } from "theme/themes";
/**
 * ? Local & Shared Imports
 */
import icons from "@assets/index";
// ? Screens
import HomeScreen from "@screens/home/home.screen";
import SessionsScreen from "@screens/sessions/sessions.screen";
import { RNImage, RNPressable, RNTextWrapper } from "../components/atoms/index";
import navigationStyles from "./navigation.style";
import SCREENS from "./screeen-names";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const styles = navigationStyles(palette);
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => {
          // Add actual logout logic here
          console.log("Logged out");
          // Navigate to a login screen or perform other actions
        },
      },
    ]);
  };

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    console.debug("size: ", size, color);
    let iconName = icons.mic;
    switch (route.name) {
      case SCREENS.RECORD:
        iconName = icons.mic;
        break;
      case SCREENS.SESSIONS:
        iconName = icons.session;
        break;
      default:
        iconName = icons.mic;
        break;
    }
    return (
      <RNImage
        image={iconName}
        style={[
          styles.tabNavigationIcon,
          {
            tintColor: focused ? palette.btnPrimary : palette.primaryTextColor,
          },
        ]}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
        tabBarActiveTintColor: palette.btnPrimary,
        tabBarInactiveTintColor: palette.primaryTextColor,
        tabBarStyle: {
          backgroundColor: isDarkMode ? palette.black : palette.white,
        },
        tabBarLabelStyle: styles.tabBarText,
      })}
    >
      <Tab.Screen name={SCREENS.RECORD} component={HomeScreen} />
      <Tab.Screen name={SCREENS.SESSIONS} component={SessionsScreen} />

      {/* Logout button */}
      <Tab.Screen
        name="Logout"
        component={() => null} // No screen is required
        options={{
          tabBarButton: (props) => (
            <RNPressable
              {...props}
              onPress={handleLogout} // Trigger logout function on press
              // eslint-disable-next-line react-native/no-inline-styles
              style={styles.logoutBtn}
            >
              <RNImage
                image={icons.logout}
                style={[
                  styles.tabNavigationIcon,
                  {
                    tintColor: palette.primaryTextColor,
                    marginTop: moderateScale(4),
                  },
                ]}
              />
              <RNTextWrapper style={styles.logoutText}>Logout</RNTextWrapper>
            </RNPressable>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
