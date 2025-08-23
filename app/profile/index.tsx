// app/profile/index.tsx

import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    const { user } = useUser();

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>My Profile</Text>

        <Image
            source={{ uri: user?.imageUrl }}
            style={styles.avatar}
        />

        <Text style={styles.label}>Full Name</Text>
        <Text style={styles.value}>{user?.fullName}</Text>

        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.value}>{user?.emailAddresses[0].emailAddress}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 60,
        alignSelf: 'center',
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#444',
        marginTop: 16,
    },
    value: {
        fontSize: 16,
        color: '#222',
        marginTop: 4,
    },
});
