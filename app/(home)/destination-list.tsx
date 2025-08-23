import React, { useEffect, useState } from 'react';
import { Text, FlatList, Image, StyleSheet, Pressable, Linking, TextInput, View } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search destination or region..."
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
                <Image source={{ uri:item.image_url}} style={styles.image} />
              
            </Link>
            <Text style={styles.title}>{item.title}</Text>
            <Text>  Region: {item.region}</Text>
            <Text>  Rating: {item.rating}</Text>
            <Text>  Price: {item.price}</Text>
          </View>
        )}
      />
            {/* Floating Chat Desk Button */}
      <Pressable
        style={styles.chatButton}
        onPress={() => Linking.openURL('https://wa.me/254746665338')} // Replace with your actual link
      >
        <MaterialIcons name="chat" size={28} color="white" />
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#1585d6ff',
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#d8dbddff',
  },
  image: {
    
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  bookNow: {
    padding: 16,
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#FFAD33',
    borderRadius: 10,
    marginTop: 10,
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
    elevation: 5, // for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
},
searchInput: {
  height: 48,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 12,
  marginBottom: 16,
  backgroundColor: '#f9f9f9',
},


});
