import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';

export default function BookingSuccess() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>🎉 Your booking was successful!</Text>
      <Text style={styles.subtext}>We’ll contact you with more details soon.</Text>
      <Button title="Return to Home" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  message: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  subtext: { fontSize: 16, color: '#555', marginBottom: 20 },
});
