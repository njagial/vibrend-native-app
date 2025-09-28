import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import SignOutButton from '../components/SignOutButton';

const backgroundImage = {
  uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', // 🌊 sample travel photo
};

export default function Page() {
  const { user } = useUser();

  return (
    <ImageBackground source={backgroundImage} style={styles.bgImage} blurRadius={2}>
      <SafeAreaView style={styles.overlay}>
        <View style={styles.hero}>
          <Text style={styles.logo}>Vibrend Agency 🌍</Text>
          <Text style={styles.tagline}>
            Explore, Book & Experience East Africa
          </Text>
        </View>

        <SignedIn>
          <View style={styles.card}>
            <Text style={styles.heading}>Welcome </Text>
            <Text style={styles.subheading}>
              {user?.emailAddresses[0].emailAddress}
            </Text>

            <Link href="./(home)/destination-list" asChild>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryText}>Explore Destinations</Text>
              </TouchableOpacity>
            </Link>

            <Link href="./profile" asChild>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryText}>View Profile</Text>
              </TouchableOpacity>
            </Link>

            <Link href="./settings" asChild>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryText}>Settings</Text>
              </TouchableOpacity>
            </Link>

            <View style={{ marginTop: 24 }}>
              <SignOutButton />
            </View>
          </View>
        </SignedIn>

        <SignedOut>
          <View style={styles.card}>
            <Text style={styles.heading}>Welcome Guest</Text>
            <Text style={styles.subheading}>Sign in to continue</Text>

            <Link href="/(auth)/sign-in" asChild>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryText}>Sign In</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/(auth)/sign-up" asChild>
              <TouchableOpacity
                style={[
                  styles.secondaryButton,
                  { borderWidth: 1, borderColor: '#007aff' },
                ]}
              >
                <Text style={[styles.secondaryText, { color: '#007aff' }]}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </SignedOut>

        {/* 👇 Services Preview */}
        <View style={styles.services}>
          <Text style={styles.servicesTitle}>Our Services</Text>
          <View style={styles.servicesGrid}>
            <View style={styles.serviceBox}>
              <Text style={styles.serviceIcon}>✈️</Text>
              <Text style={styles.serviceText}>Tour Packages</Text>
            </View>
            <View style={styles.serviceBox}>
              <Text style={styles.serviceIcon}>💳</Text>
              <Text style={styles.serviceText}>Secure Payments</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // dark overlay for readability
    justifyContent: 'center',
    padding: 20,
  },
  hero: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },
  tagline: {
    fontSize: 16,
    color: '#f1f1f1',
    marginTop: 6,
    textAlign: 'center',
  },
  card: {
  backgroundColor: 'rgba(255, 255, 255, 0)', // soft transparent white
  padding: 20,
  marginBottom: 24,
},

  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
    color: '#222',
  },
  subheading: {
    fontSize: 14,
    color: '#f3e8e8ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#007aff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  primaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#f4f6f8',
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
  services: {
    marginTop: 16,
    paddingVertical: 12,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  servicesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceBox: {
    alignItems: 'center',
  },
  serviceIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  serviceText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
