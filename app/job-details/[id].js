import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, FONT, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import { Stack, useRouter, useSearchParams } from "expo-router";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const onRefresh = () => {};

  return (
    <SafeAreaView style={styles.detailView}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "Job Infomation",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: FONT.bold,
            fontSize: SIZES.xLarge,
            color: COLORS.primary,
            marginTop: 2,
          },
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl />}
          refreshing={refreshing}
          onRefresh={onRefresh}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.tertiary} />
          ) : error ? (
            <Text>Something is wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={styles.contentsView}>
              <Company companyLogo={data[0].employer_logo} />

              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  detailView: { flex: 1, backgroundColor: COLORS.lightWhite },
  contentsView: {
    padding: SIZES.medium,
    paddingBottom: 100,
  },
});
