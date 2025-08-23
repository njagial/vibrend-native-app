import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';  

export default function FlutterWave() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Payment Simulation</Text>
            <Text style={styles.info}>This is a dummy payment gateway for demonstration purposes.</Text>
            <Button
                title="Simulate Payment"
                onPress={() => alert('Payment simulated successfully!') }/>
            <Text style={styles.info}>Click below to confirm your booking.</Text>
            <Link href="/(home)/booking/successful" asChild>
                <Button title="Confirm booking" />
            </Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
    info: { fontSize: 16, color: '#666', marginBottom: 32, textAlign: 'center' },
});

