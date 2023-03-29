import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
// splash screen : 앱 실행 시, 처음에 뜨게 하는 화면 (짤막하게)

const Layout = () => {
  return <Stack />;
};

export default Layout;
