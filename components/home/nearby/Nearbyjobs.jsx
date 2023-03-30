import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useFetch from "../../../hook/useFetch";
import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useRouter } from "expo-router";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error, errorMessage } = useFetch("search", {
    query: "Front-End Developer",
    num_page: 1,
  });

  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.tertiary} />
        ) : error ? (
          <Text>Somthing is wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>

      {/* <ErrorToast text1={errorMessage} /> */}
    </View>
  );
};

export default Nearbyjobs;
