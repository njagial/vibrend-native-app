// app/profile/index.tsx
import React from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useUser, useClerk } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleEditProfile = () => {
    Alert.alert("Coming Soon", "Edit profile functionality will be added here.");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.headerWrapper}>
          <Image
            source={{ uri: user?.imageUrl }}
            style={styles.avatar}
          />
          <Text style={styles.header}>{user?.fullName || " User"}</Text>
          <Text style={styles.subheader}>{user?.emailAddresses[0].emailAddress}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Account Details</Text>
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.value}>{user?.fullName}</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user?.emailAddresses[0].emailAddress}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
            <MaterialIcons name="edit" size={20} color="#fff" />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.signOut]} onPress={handleSignOut}>
            <MaterialIcons name="logout" size={20} color="#fff" />
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#092905ff',
  },
  headerWrapper: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#3672b2',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 12,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  subheader: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    color: '#222',
    marginTop: 2,
  },
  actions: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#3672b2',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  signOut: {
    backgroundColor: '#d9534f',
  },
});
