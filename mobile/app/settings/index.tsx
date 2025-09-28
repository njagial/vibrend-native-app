// app/settings/index.tsx

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <View style={styles.settingRow}>
                <Text style={styles.label}>Enable Notifications</Text>
                <Switch
                    value={notifications}
                    onValueChange={setNotifications}
                />
            </View>

        <View style={styles.settingRow}>
            <Text style={styles.label}>Dark Mode</Text>
            <Switch
                value={darkMode}
                onValueChange={setDarkMode}
            />
        </View>

        <View style={styles.settingRow}>
            <Text style={styles.label}>Location Access</Text>
            <Switch
                value={true}
                disabled
            />
        </View>
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
        marginBottom: 24,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
});
