import { StyleSheet, Platform, Button, ScrollView } from "react-native";
import * as Clipboard from 'expo-clipboard';

import { Text, View } from "../../components/Themed";
import {
  useNotifications,
  sendPushNotification,
} from "../../stores/notification-utils";

export default function TabOneScreen() {
  const { lastNotificationReceived, lastNotificationResponse, expoPushToken } =
    useNotifications();
  return (
    <ScrollView>
      <Text style={styles.title}>Notification test info</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.subTitle}>Last notification received (app foregrounded):</Text>
      <Text style={styles.debugInfo}>
        {JSON.stringify(lastNotificationReceived)}
      </Text>
      <Text style={styles.subTitle}>Last notification response (selected from background):</Text>
      <Text style={styles.debugInfo}>
        {JSON.stringify(lastNotificationResponse)}
      </Text>
      <Text style={styles.subTitle}>Push token:</Text>
      <Text style={styles.debugInfo}>{expoPushToken}</Text>
      <View style={styles.extraSpace} />
      <Button title="Copy token to clipboard" onPress={() => {
        Clipboard.setStringAsync(expoPushToken);
      }} />
      <View style={styles.extraSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  debugInfo: {
    width: "80%",
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    color: "black",
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
  },
  extraSpace: {
    height: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
