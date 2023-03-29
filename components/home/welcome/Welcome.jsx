import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  const [first, setfirst] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Hyung-Jin Han</Text>
        <Text style={styles.welcomeMessage}>Find Your Jobs!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
