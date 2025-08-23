import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function BookNowScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [name, setName] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [count, setCount] = useState('');
  const [notes, setNotes] = useState('');
  const [contacts, setContacts] = useState('');

  const handleBooking = () => {
  router.push('/booking/FlutterWave'); // ✅ Absolute path
};


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Tour: {id}</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Preferred Travel Date"
        value={travelDate}
        onChangeText={setTravelDate}
      />
      <TextInput
        style={styles.input}
        placeholder="No. of people"
        value={count}
        onChangeText={setCount}
      />

      <TextInput
        style={styles.textarea}
        placeholder="Special Requirements / Notes"
        value={notes}
        onChangeText={setNotes}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="contact details, email or phone"
        value={contacts}
        onChangeText={setContacts}
      />

      <Button title="Confirm Booking" onPress={handleBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#3672b2ff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
},
});
