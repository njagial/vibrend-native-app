import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import SignOutButton from '../components/SignOutButton';

export default function Page() {
  const { user } = useUser();

  return (
    <SafeAreaView style={styles.container}>
      <SignedIn>
        <Text style={styles.heading}>Welcome Back 👋</Text>
        <Text style={styles.subheading}>{user?.emailAddresses[0].emailAddress}</Text>

        <Link href="./(home)/destination-list" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explore Destinations</Text>
          </TouchableOpacity>
        </Link>

        <Link href="./profile" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Profile</Text>
          </TouchableOpacity>
        </Link>

        <Link href="./settings" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </Link>

        <View style={{ marginTop: 24 }}>
          <SignOutButton />
        </View>
      </SignedIn>

      <SignedOut>
        <Text style={styles.heading}>Welcome Guest</Text>
        <Text style={styles.subheading}>Sign in to continue</Text>

        <Link href="/(auth)/sign-in" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(auth)/sign-up" asChild>
          <TouchableOpacity style={[styles.button, styles.altButton]}>
            <Text style={[styles.buttonText, styles.altText]}>Create Account</Text>
          </TouchableOpacity>
        </Link>
      </SignedOut>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#3672b2ff',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
    color: '#222',
  },
  subheading: {
    fontSize: 16,
    color: '#222',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#bbc5d0ff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#bbc5d0ff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryText: {
    color: '#333',
    fontWeight: '500',
    fontSize: 15,
  },
  altButton: {
    backgroundColor: '#bbc5d0ff',
  },
  altText: {
    color: '#007aff',
  },
});
