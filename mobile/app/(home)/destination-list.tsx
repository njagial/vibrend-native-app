import React, { useEffect, useState } from 'react';
import { Text, FlatList, Image, StyleSheet, Pressable, Linking, TextInput, View, ImageBackground } from 'react-native';
import { fetchDestinations } from '../apis/destinations-api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

type Destination = {
  _id: string;
  title: string;
  region: string;
  image_url: string;
  rating: number;
  description: string;
  price: string;
};

export default function DestinationsScreen() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredDestinations = destinations.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchDestinations();
        setDestinations(data as Destination[]);
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      }
    })();
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/008/641/746/small/airplane-flying-above-the-ocean-sea-with-sunlight-shining-in-blue-sky-background-travel-journey-and-wanderlust-transportation-concept-3d-illustration-rendering-photo.jpg' }} // ✨ Background Image (replace as needed)
      style={styles.bgImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <TextInput
          placeholder="Search destination or region..."
          placeholderTextColor="#555"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />

        <FlatList
          data={filteredDestinations}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Link href={`/booking/${item._id}`}>
                <Image source={{ uri: item.image_url }} style={styles.image} />
              </Link>
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.details}>Region: {item.region}</Text>
                <Text style={styles.details}>Rating: {item.rating}</Text>
                <Text style={styles.price}>Price: {item.price}</Text>
              </View>
            </View>
          )}
        />

        {/* Floating Chat Desk Button */}
        <Pressable
          style={styles.chatButton}
          onPress={() => Linking.openURL('https://wa.me/254746665338')}
        >
          <MaterialIcons name="chat" size={28} color="white" />
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // dark overlay for readability
    padding: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e88e5',
  },
  chatButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#1DA1F2',
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  searchInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#000',
  },
});
