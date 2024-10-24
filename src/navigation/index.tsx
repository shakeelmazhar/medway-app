/* eslint-disable import/extensions */
import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { DarkTheme, LightTheme } from "theme/themes";
// ? Screens
/**
 * ? Local & Shared Imports
 */
import LoginScreen from "@screens/login/login.screen";
import OnboardingScreen from "@screens/onboarding/onboarding.screen";
import RecordingScreen from "@screens/recording/recording.screen";
import AudioRecorder from "@screens/recording/temp-recording.screen";
import SessionsScreen from "@screens/sessions/sessions.screen";
import SCREENS from "./screeen-names";
import TabNavigator from "./tab-navigator";

const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator
        initialRouteName={SCREENS.ONBOARDING}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREENS.ROOT} component={TabNavigator} />
        <Stack.Screen name={SCREENS.SESSIONS}>
          {(props) => <SessionsScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name={SCREENS.RECORDING} component={RecordingScreen} />
        <Stack.Screen name={SCREENS.ONBOARDING} component={OnboardingScreen} />
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
        <Stack.Screen name="AudioRecorder" component={AudioRecorder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
