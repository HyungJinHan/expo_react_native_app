import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";

import { images, icons, COLORS, FONT, SIZES, SHADOWS } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [first, setfirst] = useState();

  return (
    <SafeAreaView style={styles.mainView}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "HHJ App",
          headerTitleAlign: "center",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollView}>
          <Welcome />

          <Popularjobs />

          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  scrollView: {
    flex: 1,
    padding: SIZES.medium,
  },
});
