import { StyleSheet, Platform, Button } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useNotifications, sendPushNotification } from '../../stores/notification-utils';

export default function TabOneScreen() {
  const { lastNotificationReceived, lastNotificationResponse, expoPushToken } = useNotifications();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification test info</Text>
      <Button title="Send notification" onPress={() => sendPushNotification(expoPushToken)} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subTitle}>Last notification received:</Text>
      <Text style={styles.debugInfo}>{JSON.stringify(lastNotificationReceived)}</Text>
      <Text style={styles.subTitle}>Last notification response:</Text>
      <Text style={styles.debugInfo}>{JSON.stringify(lastNotificationResponse)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  debugInfo: {
    width: '80%',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    color: 'black',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
