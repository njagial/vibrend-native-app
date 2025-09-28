import React, { useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, View, ActivityIndicator, ImageBackground, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import PaymentButton from "../../components/paymentButton";
import { fetchDestinationById } from '../../apis/destinations-api';

type Destination = {
  _id: string;
  title: string;
  region: string;
  image_url: string;
  rating: number;
  description: string;
  price: number;
};

export default function BookNowScreen() {
  const { id } = useLocalSearchParams();
  const [destination, setDestination] = useState<Destination | null>(null);  
  const [name, setName] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [count, setCount] = useState('');
  const [notes, setNotes] = useState('');
  const [contacts, setContacts] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetchDestinationById(id as string);
        setDestination(res);
      } catch (error) {
        console.error("Error fetching destination:", error);
      }
    };
    if (id) { fetchDetails(); }
  }, [id]);

  if (!destination) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Destination Image as Header */}
      <ImageBackground
        source={{ uri: destination.image_url }}
        style={styles.headerImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>{destination.title}</Text>
          <Text style={styles.headerSubtitle}>Region: {destination.region} | Rating: {destination.rating}⭐</Text>
          <Text style={styles.headerPrice}>Price {destination.price}</Text>
        </View>
      </ImageBackground>

      <View style={styles.formWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Preferred Travel Date"
          placeholderTextColor="#666"
          value={travelDate}
          onChangeText={setTravelDate}
        />

        <TextInput
          style={styles.input}
          placeholder="No. of people"
          placeholderTextColor="#666"
          value={count}
          onChangeText={setCount}
        />

        <TextInput
          style={styles.textarea}
          placeholder="Special Requirements / Notes"
          placeholderTextColor="#666"
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Contact details (Email / Phone)"
          placeholderTextColor="#666"
          value={contacts}
          onChangeText={setContacts}
        />

        <View style={styles.paymentWrapper}>
          <PaymentButton amount={destination.price} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#042f11ff',
  },
  headerImage: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 4,
  },
  headerPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 6,
  },
  formWrapper: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 14,
    marginBottom: 14,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 14,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 14,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  paymentWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
});
